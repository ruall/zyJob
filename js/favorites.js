new Vue({
    el: '#favorites',
    data:{
        tableData: [
            {
                time: '2020-12-01',
                price:'面议',
                name1:'文员',
                name2:'程力专用汽车股份有限公司',
                status: '0',
                address:'曾都区',
            },
            {
                time: '2020-12-01',
                price:'面议',
                name1:'文员',
                name2:'程力专用汽车股份有限公司',
                status: '1',
                address:'曾都区',
            },
            {
                time: '2020-12-01',
                price:'面议',
                name1:'文员',
                name2:'程力专用汽车股份有限公司',
                status: '0',
                address:'曾都区',
            },
            {
                time: '2020-12-01',
                price:'面议',
                name1:'文员',
                name2:'程力专用汽车股份有限公司',
                status: '0',
                address:'曾都区',
            },
            {
                time: '2020-12-01',
                price:'面议',
                name1:'文员',
                name2:'程力专用汽车股份有限公司',
                status: '1',
                address:'曾都区',
            },
            {
                time: '2020-12-01',
                price:'面议',
                name1:'文员',
                name2:'程力专用汽车股份有限公司',
                status: '0',
                address:'曾都区',
            },
            {
                time: '2020-12-01',
                price:'面议',
                name1:'文员',
                name2:'程力专用汽车股份有限公司',
                status: '1',
                address:'曾都区',
            },
            {
                time: '2020-12-01',
                price:'面议',
                name1:'文员',
                name2:'程力专用汽车股份有限公司',
                status: '1',
                address:'曾都区',
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
        },
        filterTag(value, row) {
            return row.status === value;
        },
    },
    filters: {
        findStatus: function (value) {
            switch (value){
                case '0':
                    return '已投递';
                    break
                case '1':
                    return '为投递';
                    break
            }
        }
    }
})