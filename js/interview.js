new Vue({
    el: '#interview',
    data:{
        tableData: [
            {
                name: '职位名称1',
                price: '5000',
                address: '上海市普陀区金沙江路 1518 弄',
                time:'2020-11-26 14:30',
            },
            {
                name: '职位名称2',
                price: '5000',
                address: '上海市普陀区金沙江路 1518 弄',
                time:'2020-11-26 14:30',
            },
            {
                name: '职位名称3',
                price: '5000',
                address: '上海市普陀区金沙江路 1518 弄',
                time:'2020-11-26 14:30',
            },
            {
                name: '职位名称4',
                price: '5000',
                address: '上海市普陀区金沙江路 1518 弄',
                time:'2020-11-26 14:30',
            },
            {
                name: '职位名称5',
                price: '5000',
                address: '上海市普陀区金沙江路 1518 弄',
                time:'2020-11-26 14:30',
            },
            {
                name: '职位名称6',
                price: '5000',
                address: '上海市普陀区金沙江路 1518 弄',
                time:'2020-11-26 14:30',
            },
            {
                name: '职位名称7',
                price: '5000',
                address: '上海市普陀区金沙江路 1518 弄',
                time:'2020-11-26 14:30',
            }
        ],
        multipleSelection:[],
    },
    methods:{
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    }
})