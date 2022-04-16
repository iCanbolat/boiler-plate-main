<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Database\Factories\CategoryFactory;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;
use Spatie\Activitylog\Traits\LogsActivity;

/**
 * App\Models\Category
 *
 * @property int $id
 * @property int|null $parent_id
 * @property int $order
 * @property string $name
 * @property string $slug
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read Category|null $parentId
 * @method static CategoryFactory factory(...$parameters)
 * @method static Builder|Category findSimilarSlugs(string $attribute, array $config, string $slug)
 * @method static Builder|Category newModelQuery()
 * @method static Builder|Category newQuery()
 * @method static Builder|Category query()
 * @method static Builder|Category whereCreatedAt($value)
 * @method static Builder|Category whereId($value)
 * @method static Builder|Category whereName($value)
 * @method static Builder|Category whereOrder($value)
 * @method static Builder|Category whereParentId($value)
 * @method static Builder|Category whereSlug($value)
 * @method static Builder|Category whereUpdatedAt($value)
 * @method static Builder|Category withUniqueSlugConstraints(Model $model, string $attribute, array $config, string $slug)
 * @mixin Eloquent
 * @property string|null $description
 * @property string|null $permission
 * @property string|null $target
 * @property string|null $status
 * @property string|null $deleted_at
 * @method static Builder|Category whereDeletedAt($value)
 * @method static Builder|Category whereDescription($value)
 * @method static Builder|Category wherePermission($value)
 * @method static Builder|Category whereStatus($value)
 * @method static Builder|Category whereTarget($value)
 */
class Category extends Model
{
    use HasFactory, Sluggable, SoftDeletes, LogsActivity;
    const CREATE_PERMISSION = 'kategori oluştur';
    const DELETE_PERMISSION = 'kategori sil';

    protected $guarded = [];

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

    public function parentId(): BelongsTo
    {
        return $this->belongsTo(self::class, 'parent_id', 'id');
    }

    public function checkForPermission(User $user): bool
    {
        return $user->hasPermissionTo($this->permission);
    }
}
