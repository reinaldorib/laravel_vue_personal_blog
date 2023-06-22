<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;


class LoginController extends Controller
{
    //
    public function login(Request $request)
    {
        $credenciais = $request->validate([
            'email' => ['required','email'],
            'password' => ['required'],
        ]);

        if(Auth::attempt($credenciais))
        {
            $request ->session()->regenerate();
            return Auth::user()->name;
        }
        else
        {
            return redirect()->back()->with('erro','Email ou senha invalida');
        }

    }

    public function logado(User $user){
        $user->name = Auth::user()->name;
        $user->email = Auth::user()->email;
        $user->id = Auth::id();
        return $user;
    }


    public function logout(Request $request){
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->intended('/');
    }


}
