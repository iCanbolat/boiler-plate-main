<?php

namespace App\Traits;

use Illuminate\Http\JsonResponse;

trait ApiResponse
{
    /**
     * Successful response
     * @param $data
     * @param null $message
     * @param int $code
     * @return JsonResponse
     */
    protected function successResponse($data, $message = null, int $code = 200): JsonResponse
    {
        return response()->json([
            'status' => 'Success',
            'message' => $message,
            'data' => $data
        ], $code);
    }

    /**
     * Error response
     * @param null $message
     * @param $code
     * @return JsonResponse
     */
    protected function errorResponse($message, $code): JsonResponse
    {
        return response()->json([
            'status' => 'Error',
            'message' => $message,
            'data' => null
        ], $code);
    }
}
