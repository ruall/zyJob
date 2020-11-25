var vm = new Vue({
    el:'#creatResume',
    data:{
        dialogOpen:[
            {
                checked:false,
                isEdit:false,
                index:1
            },
            {
                checked:false,
                isEdit:false,
                index:2
            },
            {
                checked:false,
                isEdit:false,
                index:3
            },
            {
                checked:false,
                isEdit:false,
                index:4
            },
            {
                checked:false,
                isEdit:false,
                index:5
            },
            {
                checked:false,
                isEdit:false,
                index:6
            },
            {
                checked:false,
                isEdit:false,
                index:7
            },
            {
                checked:false,
                isEdit:false,
                index:8
            },
            {
                checked:false,
                isEdit:false,
                index:9
            },
        ],
        snap:{},
        ruleForm: {
            name: '',
            sex:0,
            birthday:'',
            educ:'',
            phoneNum:'',
            email:'',
            qq:'',
            status:'',
            areaValue:["420000", "421300", "421303"],
            address:'',
            job:'',
            workAddress:[],
            domicile:'',
            marriage:'',
            height:'',
            intentional:'',
            price:'',
            eval:'',
            nickName:'',
        },
        ruleForm1:{
            name:'',
            workAddress:'',
            job:'',
            price:'',
            list:[
                {
                    name:'意向岗位',
                    workAddress:["421303"],
                    job:["00112"],
                    price:6,
                }
            ],
        },
        ruleForm2:{
          eval:'',
            list:[
                {
                    eval:'自我评价自我评价自我评价自我评价自我评价自我评价自我评价自我评价自我评价自我评价自我评价自我评价自我评价自我评价自我评价自我评价自我评价自我评价自我评价自我评价自我评价自我评价自我评价自我评价自我评价自我评价自我评价自我评价',
                }
            ]
        },
        ruleForm3:{
            name:'',
            nature:'',
            person:'',
            industry:'',
            date:[],
            occName:'',
            contact:'',
            list:[
                {
                    name:'公司名称',
                    nature:'0',
                    person:'1',
                    industry:'2',
                    date:['2018-2','2020-10'],
                    occName:'职位名称',
                    contact:'描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述'
                },
                {
                    name:'公司名称1',
                    nature:'0',
                    person:'1',
                    industry:'2',
                    date:['2018-2','2020-10'],
                    occName:'职位名称',
                    contact:'描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述'
                },
            ],
        },
        ruleForm4:{
            resource: 0,
            checked:0,
            name:'',
            date:'',
            educ:'',
            disc:'',
            desc:'',
            list:[
                {
                    resource: 0,
                    checked:0,
                    name:'学校名称',
                    date:['2018-1','2020-10'],
                    educ:'3',
                    disc:'专业名称',
                    desc:'描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容',
                },
                {
                    resource: 1,
                    checked:0,
                    name:'培训机构名称1',
                    date:['2018-1','2020-10'],
                    educ:'',
                    disc:'培训项目名称',
                    desc:'描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容',
                }
            ],
        },
        ruleForm5:{
            name:'',
            date:'',
            disc:'',
            desc:'',
            list:[
                {
                    name:'项目名称',
                    date:['2017-1','2019-11'],
                    disc:'担任职位',
                    desc:'项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述',
                },
                {
                    name:'项目名称1',
                    date:['2017-1','2019-11'],
                    disc:'担任职位',
                    desc:'项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述',
                }
            ],
        },
        ruleForm6:[
            {
                name:'',
                skill:'',
            },
        ],
        ruleForm7:[
            {
                name:'',
                skill:'',
            },
        ],
        ruleForm8:[
            {
                name:'',
                date:'',
            },
        ],
        ruleForm9:{
            theme: '',
            desc:'',
            list:[
                {
                    theme:'0',
                    desc:'描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
                },
                {
                    theme:'1',
                    desc:'描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
                }
            ],
        },
        skill:[
            {
                value:'0',
                label:'入门'
            },
            {
                value:'1',
                label:'熟练'
            },
            {
                value:'2',
                label:'精通'
            },
            {
                value:'3',
                label:'其他'
            }
        ],
        language:[
            {
                value:'0',
                label:'普通话',
                skilled:'0',
            },
            {
                value:'1',
                label:'粤语',
                skilled:'0',
            },
            {
                value:'2',
                label:'英语',
                skilled:'0',
            },
            {
                value:'3',
                label:'日语',
                skilled:'0',
            },
            {
                value:'4',
                label:'法语',
                skilled:'0',
            },
            {
                value:'5',
                label:'德语',
                skilled:'0',
            },
            {
                value:'6',
                label:'阿拉伯语',
                skilled:'0',
            },
            {
                value:'7',
                label:'德语',
                skilled:'0',
            },
            {
                value:'8',
                label:'西班牙语',
                skilled:'0',
            },
            {
                value:'9',
                label:'朝鲜语',
                skilled:'0',
            },
            {
                value:'10',
                label:'意大利语',
                skilled:'0',
            },
            {
                value:'11',
                label:'韩语',
                skilled:'0',
            },
            {
                value:'12',
                label:'葡萄牙语',
                skilled:'0',
            },
            {
                value:'13',
                label:'其他语种',
                skilled:'0',
            },
        ],

        rules: {
            name: [
                { required: true, message: '请输入姓名', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 2 到 3 个字符', trigger: 'blur' }
            ],
            phoneNum: [
                { required: true, message: '请输入手机号', trigger: 'change' }
            ],
            email: [
                { required: true, message: '请输入邮箱地址', trigger: 'blur' }
            ],
            address:[
                { required: true, message: '请输入详细地址', trigger: 'blur' }
            ],
        },
        rules1: {
            name: [
                { required: true, message: '请输入姓名', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 2 到 3 个字符', trigger: 'blur' }
            ],
            phoneNum: [
                { required: true, message: '请输入手机号', trigger: 'change' }
            ],
            email: [
                { required: true, message: '请输入邮箱地址', trigger: 'blur' }
            ],
            address:[
                { required: true, message: '请输入详细地址', trigger: 'blur' }
            ],
        },
        area:[],
        options: [
            {
                value: '00001',
                label: '销售、客服、市场、公关',
                children: [
                    {
                        value: '00011',
                        label: '销售人员',
                        children: [
                            {
                                value: '00111',
                                label: '销售代表'
                            }, {
                                value: '00112',
                                label: '电话销售'
                            }, {
                                value: '00113',
                                label: '客户经理'
                            }, {
                                value: '00114',
                                label: '营业员'
                            }
                        ]
                    },
                    {
                        value: '00012',
                        label: '销售管理',
                        children: [
                            {
                                value: '00121',
                                label: '销售总监'
                            },
                            {
                                value: '00122',
                                label: '销售经理'
                            },
                            {
                                value: '00123',
                                label: '大客户经理'
                            }
                        ]
                    },
                    {
                        value: '00013',
                        label: '客服/售后',
                        children: [
                            {
                                value: '00131',
                                label: '客服总监'
                            },
                            {
                                value: '00132',
                                label: '客服经理'
                            },
                            {
                                value: '00133',
                                label: '客服专员'
                            }
                        ]
                    }
                ]
            },
            {
                value: '00002',
                label: '人资、行政、财务、管理',
                children: [
                    {
                        value: '00021',
                        label: '销售人员',
                        children: [
                            {
                                value: '00211',
                                label: '人力资源专员'
                            }, {
                                value: '00212',
                                label: '招聘专员'
                            }, {
                                value: '00213',
                                label: '培训专员'
                            }, {
                                value: '00214',
                                label: '绩效专员'
                            }
                        ]
                    },
                    {
                        value: '00022',
                        label: '行政后勤',
                        children: [
                            {
                                value: '00221',
                                label: '行政专员'
                            },
                            {
                                value: '00222',
                                label: '文员'
                            },
                            {
                                value: '00223',
                                label: '前台接待'
                            },
                            {
                                value: '00224',
                                label: '客运司机'
                            },
                            {
                                value: '00225',
                                label: '保洁员'
                            }
                        ]
                    },
                    {
                        value: '00023',
                        label: '财务/审计/税务',
                        children: [
                            {
                                value: '00231',
                                label: '财务专员'
                            },
                            {
                                value: '00232',
                                label: '会计'
                            },
                            {
                                value: '00233',
                                label: '出纳'
                            }
                        ]
                    }
                ]
            }
        ],

    },
    mounted(){
        $.ajax({
            url:"js/citys.json",
            dataType:'json',
            success: function(msg) {
                vm.area = eval(msg);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                this.$message.error('省市区信息读取失败');
            }
        });
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if(formName == 'ruleForm1'){
                    this.dialogOpen = false
                }
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName,v) {
            this.$refs[formName].resetFields();
            this.dialogOpen[v].checked = false
            if(this.dialogOpen[v].isEdit){
                this[formName].list.unshift(this.snap)
                this.snap = {}
            }
        },
        changeV(){
            console.log(this.ruleForm3.date)
        },
        handleChange(value) {
            console.log(value);
        },
        newList(val){
            if(val == 0){
                this.ruleForm6.push({name:'',skill: ''})
            }else if(val == 1){
                this.ruleForm7.push({name:'',skill: ''})
            }else if(val == 2){
                this.ruleForm8.push({name:'',date: ''})
            }
        },
        delList(val,index){
            if(val == 0){
                this.ruleForm6.splice(index,1)
            }else if(val == 1){
                this.ruleForm7.splice(index,1)
            }else if(val == 2){
                this.ruleForm8.splice(index,1)
            }
        },
        openDialog(v){
            if(v == 2){

            }
            this.dialogOpen[v].checked = true
        },
        edit(v,i,j){
            if(v == 'ruleForm1'){
                this[v].name = this[v].list[i].name;
                this[v].workAddress = this[v].list[i].workAddress;
                this[v].job = this[v].list[i].job;
                this[v].price = this[v].list[i].price;
                this.snap = {
                    name:this[v].list[i].name,
                    workAddress : this[v].list[i].workAddress,
                    job : this[v].list[i].job,
                    price : this[v].list[i].price,
                }
            }else if(v == 'ruleForm2'){
                this[v].eval = this[v].list[i].eval;
                this.snap = {
                    eval:this[v].list[i].eval,
                }
            }else if(v == 'ruleForm3'){
                this[v].name = this[v].list[i].name;
                this[v].nature = this[v].list[i].nature;
                this[v].person = this[v].list[i].person;
                this[v].industry = this[v].list[i].industry;
                this[v].date = this[v].list[i].date;
                this[v].occName = this[v].list[i].occName;
                this[v].contact = this[v].list[i].contact;
                this.snap = {
                    name:this[v].list[i].name,
                    nature : this[v].list[i].nature,
                    person : this[v].list[i].person,
                    industry : this[v].list[i].industry,
                    date : this[v].list[i].date,
                    occName : this[v].list[i].occName,
                    contact : this[v].list[i].contact
                }
            }else if(v == 'ruleForm4'){
                this[v].resource = this[v].list[i].resource
                this[v].checked = this[v].list[i].checked
                this[v].name = this[v].list[i].name
                this[v].date = this[v].list[i].date
                this[v].educ = this[v].list[i].educ
                this[v].disc = this[v].list[i].disc
                this[v].desc = this[v].list[i].desc
                this.snap = {
                    resource:this[v].list[i].resource,
                    checked : this[v].list[i].checked,
                    name : this[v].list[i].name,
                    date : this[v].list[i].date,
                    educ : this[v].list[i].educ,
                    disc : this[v].list[i].disc,
                    desc : this[v].list[i].desc
                }
            }else if(v == 'ruleForm5'){
                this[v].name = this[v].list[i].name
                this[v].date = this[v].list[i].date
                this[v].disc = this[v].list[i].disc
                this[v].desc = this[v].list[i].desc
                this.snap = {
                    name : this[v].list[i].name,
                    date : this[v].list[i].date,
                    disc : this[v].list[i].disc,
                    desc : this[v].list[i].desc
                }
            }else if(v == 'ruleForm9'){
                this[v].theme = this[v].list[i].theme
                this[v].desc = this[v].list[i].desc
                this.snap = {
                    theme : this[v].list[i].theme,
                    desc : this[v].list[i].desc
                }
            }
            this.dialogOpen[j].isEdit = true
            this.dialogOpen[j].checked = true
            this[v].list.splice(i,1)
        },
        del(v,i){
            this.$confirm('确定要删除吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this[v].list.splice(i,1)
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
    }
})