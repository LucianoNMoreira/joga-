'user server'

import { redirect  } from "next/navigation"

export async function login(formData) {
    console.log('formData', formData)

    redirect('/')
}
