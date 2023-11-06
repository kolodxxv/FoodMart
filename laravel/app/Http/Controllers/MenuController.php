<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Menu;

class MenuController extends Controller
{
    public function getMenu() {
        return response()->json(Menu::all(), 200);
    }

    public function getMenuById($id) {
        $menu = Menu::find($id);
        if(is_null($menu)) {
            return response()->json(['message' => 'Menu item Not Found'], 404);
        }
        return response()->json($menu::find($id), 200);
    }
}
