new Vue({
    el: '#browse',
    data:{
        tableData: [
            {
                name: '职位名称1',
                industry:'互联网、电子商务',
                lastTime: '2020-11-14 09:36',
                address:'随州市曾都区',
                time:'2020-11-21',
            },
            {
                name: '职位名称2',
                industry:'互联网、电子商务',
                lastTime: '2020-11-14 09:36',
                address:'随州市曾都区',
                time:'2020-11-21',
            },
            {
                name: '职位名称3',
                industry:'互联网、电子商务',
                lastTime: '2020-11-14 09:36',
                address:'随州市曾都区',
                time:'2020-11-21',
            },
            {
                name: '职位名称4',
                industry:'互联网、电子商务',
                lastTime: '2020-11-14 09:36',
                address:'随州市曾都区',
                time:'2020-11-21',
            },
            {
                name: '职位名称5',
                industry:'互联网、电子商务',
                lastTime: '2020-11-14 09:36',
                address:'随州市曾都区',
                time:'2020-11-21',
            },
            {
                name: '职位名称6',
                industry:'互联网、电子商务',
                lastTime: '2020-11-14 09:36',
                address:'随州市曾都区随州市曾都区随州市曾都区随州市曾都区随州市曾都区',
                time:'2020-11-21',
            },
            {
                name: '职位名称7',
                industry:'互联网、电子商务',
                lastTime: '2020-11-14 09:36',
                address:'随州市曾都区',
                time:'2020-11-21',
            },
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