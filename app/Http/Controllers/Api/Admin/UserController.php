<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Traits\ApiResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
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
            UserResource::collection(
                User::all()
            )
        );
    }

    public function show(int $id): JsonResponse
    {
        $user = User::find($id);
        return $this->successResponse(
            new UserResource(
                $user
            )
        );
    }
}
