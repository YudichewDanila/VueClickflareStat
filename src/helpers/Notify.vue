<template>

</template>

<script>
import { toast } from "vue3-toastify";

export default {
    loginSuccess(str) {
        return this.textSuccess((str ?? 'Logged in!'))
    },
    emptyError(attribute) {
        return this.textError(`${attribute} cannot be empty!`)
    },
    invalidTypeError(attribute, type) {
        return this.textError(`${attribute} must be type of ${type}!`)
    },
    apiError(error) {
        return this.textError(error.response.data.message)
    },
    apiMessage(response) {
        return this.textInfo(response.data.message)
    },
    textError(text) {
        toast(text, { type: "error" })
        return false
    },
    textSuccess(text) {
        toast(text, { type: 'success' })
        return true
    },
    textInfo(text) {
        toast(text, { type: 'info' })
        return true
    }
}
</script>

<style scoped>

</style>
