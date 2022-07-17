<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lot extends Model
{

    use HasFactory;
    protected $fillable= [
        'name',
        'state',
        'city',
        'location',
        'image',
        'total',
        'start_date',
        'end_date',
    ];
}
