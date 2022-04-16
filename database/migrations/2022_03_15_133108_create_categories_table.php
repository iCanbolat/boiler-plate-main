<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('parent_id')->nullable()->default(null);
            $table->foreign('parent_id')->references('id')->on('categories')->onUpdate('cascade')->onDelete('set null');
            $table->enum('lang', ['TR', 'EN'])->default('TR');
            $table->string('name');
            $table->text('description')->nullable();
            $table->string('permission', 1000)->nullable();
            $table->unsignedMediumInteger('order')->default(1);
            $table->enum('target', ['_blank', '_self'])->nullable();
            $table->boolean('status')->default(true)->nullable();
            $table->string('slug')->unique();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories');
    }
}
