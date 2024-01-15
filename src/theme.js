const main_color = 'sky'
const second_color = 'rose'

const main_color_scheme = `${main_color}-500`
const second_color_scheme = `${second_color}-500`

const main_bg = `bg-${main_color_scheme}`
const second_bg = `bg-${second_color_scheme}`

const main_bg_hover = `hover:${main_bg}`
const second_bg_hover = `hover:${second_bg}`

const _base = 'text-sm sm:text-base min-h-10'
const base_ring = `outline-none focus:ring ring-${main_color_scheme}/50`
const base_animation = 'transition ease-in-out'
const base_button = `${_base} ${base_animation} ${main_bg} ${main_bg_hover}/80 text-white rounded hover:cursor-pointer`
const base_input = `${_base} ${base_ring} ${base_animation} px-2 sm:px-4 lg:px-6 text-gray-500 shadow-inner rounded border hover:border-${main_color_scheme} focus:border-${main_color_scheme}`

const pagination_size = 'w-12 h-12'
const pagination_nav_btn = 'rounded flex justify-center items-center disabled:opacity-50'
const before_bg_ring = `relative hover:before:${main_bg}/15 before:content-[\'\'] before:transition before:absolute before:bottom-1/2 before:right-1/2 before:translate-y-2/4 before:translate-x-2/4 before:left-50 before:w-9/12 before:h-3/4 before:rounded-full before:z-[-1]`

const flex_start_center = 'flex justify-start items-center'

export default {
    card: {
        root: { class: 'bg-white rounded shadow' },
        header: { class: 'pb-2 px-4 pt-4' },
        body: { class: 'pt-2 px-4 pb-4' }
    },
    fileupload: {
        root: { class: `px-4 py-2 inline-block ${base_button}` },
        input: { class: 'w-0 h-0 opacity-0' },
        choosebutton: { class: 'flex justify-center items-center' },
        uploadicon: { class: 'mr-2' }
    },
    calendar: {
        panel: { class: 'bg-white rounded shadow' },
        root: { class: `${base_animation} inline-block rounded` },
        input: { class: `${base_input}` },
        groupcontainer: { class: 'p-2 lg:p-4' },
        header: { class: 'flex justify-center items-center text-lg font-bold mb-2 lg:mb-4' },
        title: { class: 'mx-2 lg:mx-4' },
        table: { class: 'w-full' },
        day: { class: `text-center ${before_bg_ring} hover:cursor-pointer` },
        daylabel: { class: 'px-2.5 py-2 block' },
        previousicon: { class: 'stroke-2 font-bold' },
        nexticon: { class: 'stroke-2 font-bold' },
        previousbutton: { class: '' },
        nextbutton: { class: '' },
    },
    button: {
        root: { class: `${base_button} px-4 py-2` }
    },
    datatable: {
        root: { class: 'min-w-full' },
        table: { class: 'min-w-full' },
        headerrow: { class: `${main_bg}/15` },
        bodyrow: { class: `${second_bg_hover}/5` },
    },
    column: {
        headercell: { class: 'p-0 text-left border-y' },
        bodycell: { class: 'p-3 text-sm border-b' },
        headercontent: { class: 'p-3 flex justify-start items-center hover:cursor-pointer transition hover:opacity-50'},
        headertitle: { class: 'mr-4' },
    },


    paginator: {
        paginatorwrapper: { class: 'py-2 bg-white sticky bottom-0 left-0' },
        root: { class: 'flex justify-center items-center rounded' },
        pagebutton: ({ props, state, context }) => ({ class: `${pagination_size} ${before_bg_ring}` + (( context.active) ? ` before:${main_bg}/15` : ' before:bg-transparent') }),
        firstpagebutton: { class: `${pagination_size} ${pagination_nav_btn}` },
        previouspagebutton: { class: `${pagination_size} ${pagination_nav_btn}` },
        nextpagebutton: { class: `${pagination_size} ${pagination_nav_btn}` },
        lastpagebutton: { class: `${pagination_size} ${pagination_nav_btn}` },
        rowperpagedropdown: {
            root: { class:  `${pagination_size} ${pagination_nav_btn} hover:cursor-pointer` },
            input: { class: 'mr-2 outline-0' },
            list: { class: 'bg-white border shadow' },
            wrapper: { class: `${base_animation}` },
            item: { class: `px-2 lg:px-4 py-1 ${main_bg_hover}/15 hover:cursor-pointer` }
        },
    },

    multiselect: {
        root: { class: `${base_input} ${base_ring} flex justify-start items-center` },
        trigger: { class: 'ml-3' },
        wrapper: { class: `${base_animation}` },
        item: { class: `px-2 lg:px-4 py-1 ${main_bg_hover}/15 hover:cursor-pointer ${flex_start_center}` },
        panel: { class: 'bg-white border shadow overflow-y-scroll overflow-x-hidden' },
        checkboxcontainer: { class: `w-5 h-5 mr-2 border rounded` },
        checkboxicon: { class: `p-1 w-full h-full` },
        checkbox: { class: `w-full h-full` },
        headercheckboxcontainer: { class: `${flex_start_center}` },
        header: { class: 'px-2 lg:px-4 py-2' }
    },
}
