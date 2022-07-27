<?php

namespace App\Http\Controllers;

use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    // pagination with Inertia and mui theme


    public function index()
    {
        $users = User::paginate(10);

        return Inertia::render('Users/Index', [
            'users' => $users,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Users/Form');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        /*
        $this->validate($request, [
            'first_name' => 'required|string|max:100',
        ]);
        */
        $rules = [
            'first_name' => 'required|string|max:100',
            'last_name' => 'required|string|max:100',
            'phone' => 'required|string|max:20|unique:users',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|min:6',
        ];
        $messages = [
            'first_name.required' => 'Nombre es requerido',
            'last_name.required' => 'Apellido es requerido',
            'phone.required' => 'Teléfono es requerido',
            'phone.max' => 'Teléfono debe tener máximo 20 caracteres',
            'phone.unique' => 'Teléfono ya existe',
            'email.required' => 'Email es requerido',
            'email.email' => 'Email no es valido',
            'email.unique' => 'Email ya existe',
            'password.required' => 'Password es requerido',
            'password.min' => 'Password debe tener al menos 6 caracteres',
        ];

        $this->validate($request, $rules, $messages);
        User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'phone' => $request->phone,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);
        //Session::flash('success', 'Usuario creado correctamente');
        return redirect()->route('users.index')->with('success', 'Usuario creado correctamente');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::findOrFail($id);
        return Inertia::render('Users/Form', [
            'user' => $user,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = User::findOrFail($id);
        return Inertia::render('Users/Form', [
            'user' => $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $rules = [
            'first_name' => 'required|string|max:100',
            'last_name' => 'required|string|max:100',
            'phone' => 'required|string|max:20|unique:users,phone,'.$user->id,
            'email' => 'required|string|email|max:100|unique:users,email,'.$user->id,
        ];
        $messages = [
            'first_name.required' => 'Nombre es requerido',
            'last_name.required' => 'Apellido es requerido',
            'phone.required' => 'Teléfono es requerido',
            'phone.max' => 'Teléfono debe tener máximo 20 caracteres',
            'phone.unique' => 'Teléfono ya existe',
            'email.required' => 'Email es requerido',
            'email.email' => 'Email no es valido',
            'email.unique' => 'Email ya existe',
        ];
        if ($request->password) {
            $rules['password'] = 'required|string|min:6';
            $messages['password.required'] = 'Password es requerido';
        }
        $this->validate($request, $rules, $messages);
        $user->update([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'phone' => $request->phone,
            'email' => $request->email,
            'password' => $request->password ? bcrypt($request->password) : $user->password,
        ]);
        //Session::flash('success', 'Usuario actualizado correctamente');
        return redirect()->route('users.index')->with('success', 'Usuario actualizado correctamente');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        if ($user){
            $user->delete();
            return redirect()->route('users.index')->with('success', 'Usuario eliminado correctamente');
        }
        else{
            return redirect()->route('users.index')->with('error', 'Usuario no encontrado');
        }

    }
}
