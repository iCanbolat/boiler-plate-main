<?php

namespace App\Http\Resources;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array|Arrayable|JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'parent' => $this->when(
                $this->parentId,
                new CategoryResource($this->parentId),
                null
            ),
            'lang' => $this->lang,
            'order' => $this->order,
            'name' => $this->name,
            'description' => $this->description,
            'slug' => $this->slug
        ];
    }
}
