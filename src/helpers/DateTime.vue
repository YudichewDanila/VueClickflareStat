<script>
export default {
    getToday() {
        const today = new Date()
        return this.format(today)
    },
    getYesterday() {
      const yesterday = new Date(Date.now() - 86400000);
      return this.format(yesterday)
    },
    format(obj) {
        if (!(obj instanceof Date)) {
            throw new Error('the argument must be instance of Date object.')
        }
        let year = obj.getFullYear(),
            month = (obj.getMonth() + 1),
            day = obj.getDate()

        return (year + '-' + ((month.toString().length === 1) ? `0${month}` : month) + '-' + ((day.toString().length === 1) ? `0${day}` : day))
    }
}
</script>
