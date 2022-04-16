<?php

namespace App\Traits;

use App\Models\User;
use Illuminate\Http\JsonResponse;

trait PermissionController
{
    use ApiResponse;

    /**
     * Check if given user has ability to do this.
     * @param User $user
     * @param string $permission
     * @return JsonResponse|void
     */
    protected function checkForPermission(User $user, string $permission)
    {
        if (!$user->checkPermissionTo($permission)) {
            echo $this->errorResponse('You are not authorized to see this page', 403);
        }
    }
}
