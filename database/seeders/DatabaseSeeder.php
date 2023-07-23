<?php

namespace Database\Seeders;

use App\Models\ContactMessage;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UserSeeder::class,
            ExtraUserSeeder::class,
            ContactMessageSeeder::class,
        ]);
        \App\Models\User::factory(10)->create();


    }
}
