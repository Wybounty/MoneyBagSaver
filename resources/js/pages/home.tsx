import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Welcome" />
            <section>
                <h1>Home Page</h1>
            </section>
        </>
    );
}
