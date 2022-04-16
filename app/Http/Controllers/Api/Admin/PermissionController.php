<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\PermissionResource;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Traits\ApiResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    use ApiResponse;
    /**
     * Get all permissions
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return $this->successResponse(
            PermissionResource::collection(
                Permission::all()
            )
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request)
    {
        $validate = Validator::make(
            $request->all(),
            $this->rules()
        );
        if($validate->fails()) {
            return $this->errorResponse($validate->errors()->messages(), 400);
        }
        $validated = $validate->validated();
        $user = $request->user();
        $user->syncPermissions($validated['permission']);
        $user->refresh();
        return $this->successResponse(
            PermissionResource::collection(
                Permission::all()
            )
        );

    }
    private function rules(): array
    {
        return [
            'permission' => 'required|array',
            'permission.*' => 'required|string|exists:permissions,name'
        ];
    }
}
