new Vue({
    el: '#record',
    data:{
        tableData: [
            {
                time: '2020-11-30 09:25',
                lastTime:'2020-11-30 09:26',
                name1:'文员',
                name2:'程力专用汽车股份有限公司',
                status: '0',
                status1:'查看',
            },
            {
                time: '2020-11-30 09:25',
                lastTime:'2020-11-30 09:26',
                name1:'文员',
                name2:'程力专用汽车股份有限公司',
                status: '1',
                status1:'查看',
            },
            {
                time: '2020-11-30 09:25',
                lastTime:'2020-11-30 09:26',
                name1:'文员',
                name2:'程力专用汽车股份有限公司',
                status: '1',
                status1:'查看',
            },
            {
                time: '2020-11-30 09:25',
                lastTime:'2020-11-30 09:26',
                name1:'文员',
                name2:'程力专用汽车股份有限公司',
                status: '3',
                status1:'查看',
            },
            {
                time: '2020-11-30 09:25',
                lastTime:'2020-11-30 09:26',
                name1:'文员',
                name2:'程力专用汽车股份有限公司',
                status: '2',
                status1:'查看',
            },
            {
                time: '2020-11-30 09:25',
                lastTime:'2020-11-30 09:26',
                name1:'文员',
                name2:'程力专用汽车股份有限公司',
                status: '1',
                status1:'查看',
            },
            {
                time: '2020-11-30 09:25',
                lastTime:'2020-11-30 09:26',
                name1:'文员',
                name2:'程力专用汽车股份有限公司',
                status: '1',
                status1:'查看',
            },
            {
                time: '2020-11-30 09:25',
                lastTime:'2020-11-30 09:26',
                name1:'文员',
                name2:'程力专用汽车股份有限公司',
                status: '1',
                status1:'查看',
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
        },
        filterTag(value, row) {
            return row.status === value;
        },
    },
    filters: {
        findStatus: function (value) {
            switch (value){
                case '0':
                    return '未处理';
                    break
                case '1':
                    return 'HR已查看';
                    break
                case '2':
                    return '同意邀约';
                    break
                case '3':
                    return '婉拒邀约';
                    break
            }
        }
    }
})