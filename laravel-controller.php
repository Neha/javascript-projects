file laravel http / auth / controller


<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use DB;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    function insert(Request $reg)
    {
      $Name = $reg -> input('Name');
      $Address = $reg -> input('Address');
      $Mobile = $reg -> input('Mobile');

      $data = array('Name'=>$Name,'Address'=>$Address,'mobile'=>$Mobile);

      DB::table('users')->insert($data);

      echo "success";
    }
}
