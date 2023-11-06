<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Outlet;

class OutletController extends Controller
{
    public function getOutlet() {
        return response()->json(Outlet::all(), 200);
    }

    public function getOutletById($id) {
        $outlet = Outlet::find($id);
        if(is_null($outlet)) {
            return response()->json(['message' => 'Outlet Not Found'], 404);
        }
        return response()->json($outlet::find($id), 200);
    }
}
