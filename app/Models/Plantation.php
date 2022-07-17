<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plantation extends Model
{
    use HasFactory;
    protected $fillable= [
        'lot_id',
        'name',
        'total',
        'start_date',
        'end_date',
    ];
}
