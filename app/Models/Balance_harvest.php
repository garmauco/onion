<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Balance_harvest extends Model
{
    use HasFactory;
    protected $fillable= [
        'lot_id',
        'harvest_id',
        'user_id',
        'type',
        'value',
    ];
}
