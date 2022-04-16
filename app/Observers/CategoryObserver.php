<?php

namespace App\Observers;

use App\Models\Category;
use Spatie\Permission\Models\Permission;

class CategoryObserver
{
    /**
     * Handle the Category "creating" event.
     *
     * @param Category $category
     * @return void
     */
    public function creating(Category $category)
    {
        $permission = Permission::create([
            'name' => sprintf(
                "kategori:%s", $category->slug
            ),
            'guard_name' => 'api'
        ]);
        $category->permission = $permission->name;
    }
}
