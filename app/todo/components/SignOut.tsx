import React from 'react'
import { Button } from '@/components/ui/button'
import createSupabaseServerClient from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default function SignOut() {
    const logout=async () => {
        "use server";

        const supabase = await createSupabaseServerClient()
        await supabase.auth.signOut()

        redirect('/auth-server-action')
    }

  return (
    <form action={logout}>
        <Button>
            Sign Out
        </Button>
    </form>
  )
}
