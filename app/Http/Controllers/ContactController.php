<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\ApiResponse;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\ContactAdminResource;
use App\Models\Contact;

class ContactController extends Controller
{
    use ApiResponse;
    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            $this->rules()
        );
        if ($validator->fails()) {
            return $this->errorResponse($validator->errors()->messages(), 400);
        }
        $data = $validator->validated();
        $data['ip'] = $request->ip();
        $contact = Contact::create($data);
        if ($contact->exists()) {
            return $this->successResponse(
                new ContactAdminResource($contact),
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
            'email' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:1027',
        ];
    }
}
