<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Contact;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionsDemoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Permission::create(['name' => Contact::DELETE_CONTACTS, 'guard_name' => 'api']);
        Permission::create(['name' => Contact::SHOW_CONTACTS, 'guard_name' => 'api']);
        Permission::create(['name' => Category::CREATE_PERMISSION, 'guard_name' => 'api']);
        Permission::create(['name' => Category::DELETE_PERMISSION, 'guard_name' => 'api']);
        Role::create([
            'name' => 'Super Admin',
            'guard_name' => 'api',
        ]);
    }
}
