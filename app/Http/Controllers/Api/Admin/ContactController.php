<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ContactAdminResource;
use App\Models\Contact;
use App\Traits\PermissionController;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    use PermissionController;

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        $contact = ContactAdminResource::collection(
            Contact::all()
        );
        return $this->successResponse($contact);
    }

    /**
     * Display the specified resource.
     *
     * @param string $id
     * @param Request $request
     * @return JsonResponse
     */
    public function show(string $id, Request $request): JsonResponse
    {
        $ids = explode(',', $id);
        $ids = array_map('intval', $ids);
        $contact = Contact::whereIn('id', $ids);
        if ($contact->count() === 0) {
            return $this->errorResponse('Kayıt bulunamadı', 404);
        }
        return $this->successResponse(
            new ContactAdminResource($contact->first()),
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function destroy(int $id): JsonResponse
    {
        $contact = Contact::whereId($id);
        if ($contact->count() === 0) {
            return $this->errorResponse('Kayıt bulunamadı', 404);
        }
        $contact->delete();
        return $this->successResponse(
            new ContactAdminResource($contact->first()),
            'Kayıt başarıyla silinmiştir.'
        );
    }
}
