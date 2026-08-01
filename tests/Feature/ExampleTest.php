<?php

use App\Models\User;

test('returns a successful response', function () {
    $user = User::factory()->create([
        'email_verified_at' => now(),
    ]);

    $response = $this->actingAs($user)->get(route('home'));

    $response->assertOk();
});
