<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use App\Models\User;
use App\Traits\ApiResponse;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class CategoryController extends Controller
{
    use ApiResponse;

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return $this->successResponse(
            CategoryResource::collection(
                Category::orderBy('order', 'desc')->get()
            )
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     * @throws ValidationException
     */
    public function store(Request $request): JsonResponse
    {
        $validate = Validator::make(
            $request->all(),
            $this->rules()
        );
        if ($validate->fails()) {
            return $this->errorResponse($validate->errors()->messages(), 400);
        }
        $category = Category::create($validate->validated());
        if ($category->exists()) {
            return $this->successResponse(
                new CategoryResource($category),
                null,
                201
            );
        }
        return $this->errorResponse('Bir hata oluştu', 500);
    }

    protected function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'order' => 'required|integer|max:1027',
            'parent_id' => 'nullable|exists:categories,id',
            'description' => 'nullable|string|max:1027',
            'lang' => 'in:TR,EN'
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @param Request $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(int $id, Request $request): JsonResponse
    {
        $user = $request->user();
        $category = Category::whereId($id);
        if ($category->count() === 0) {
            return $this->errorResponse('Kayıt bulunamadı', 404);
        }
        $category = $category->first();
        $this->checkForPermission($category, $user);
        return $this->successResponse(
            new CategoryResource($category->first())
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     * @throws ValidationException
     * @throws AuthorizationException
     */
    public function update(Request $request, int $id): JsonResponse
    {
        $user = $request->user();
        $validator = Validator::make(
            $request->all(),
            $this->rules()
        );
        if ($validator->fails()) {
            return $this->errorResponse($validator->errors()->messages(), 400);
        }
        $category = Category::where('id', $id);
        if ($category->count() === 0) {
            return $this->errorResponse('Kayıt bulunamadı', 404);
        }
        $category = $category->first();
        $this->checkForPermission($category, $user);
        $validatedData = $validator->validated();
        if(isset($validatedData['parent_id'])) {
            if ($category->id === $validatedData['parent_id']) {
                return $this->errorResponse('Anakategori ile kategori aynı olamaz', 400);
            }
        }
        if (!$category->update($validatedData)) {
            return $this->errorResponse('Teknik bir sorun oluştu', 500);
        }
        $category->refresh();
        return $this->successResponse(
            new CategoryResource($category),
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param string $id
     * @return JsonResponse
     */
    public function destroy(string $id): JsonResponse
    {
        $ids = explode(',', $id);
        $ids = array_map('intval', $ids);
        $category = Category::whereIn('id', $ids);
        if ($category->count() === 0) {
            return $this->errorResponse('Kayıt bulunamadı', 404);
        }
        $category->delete();
        return $this->successResponse(
            CategoryResource::collection($category->get()),
            'Kayıt başarıyla silinmiştir.'
        );
    }

    /**
     * @throws AuthorizationException
     */
    private function checkForPermission(Category $category, User $user)
    {
        if (!$category->checkForPermission($user)) {
            throw new AuthorizationException();
        }
    }
}
