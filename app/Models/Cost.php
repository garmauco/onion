<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cost extends Model
{
    use HasFactory;
    protected $fillable= [
        'harvest_id',
        'user_id',
        'name',
        'value',
        'investor',
        'support_document',
        'date',
    ];
}
