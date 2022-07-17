<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Harvest extends Model
{
    use HasFactory;
    protected $fillable= [
        'lot_id',
        'plantation_id',
        'value',
        'start_date',
        'end_date',
    ];
}
