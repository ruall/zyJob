var vm = new Vue({
    el:'#creatResume',
    data:{
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
        },
        ruleForm2:{
          eval:'',
        },
        ruleForm3:{
            name:'',
            nature:'',
            person:'',
            industry:'',
            date:'',
            occName:'',
            contact:''
        },
        ruleForm4:{
            resource: 0,
            checked:0,
            name:'',
            date:'',
            educ:'',
            disc:'',
            desc:''
        },
        ruleForm5:{
            name:'',
            date:'',
            disc:'',
            desc:''
        },
        ruleForm6:[
            {
                name:'',
                status:'',
                rank:'',
            },
            {
                name:'',
                status:'',
                rank:'',
            }
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
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },

        submitForm1(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm1(formName) {
            this.$refs[formName].resetFields();
        },

        submitForm2(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm2(formName) {
            this.$refs[formName].resetFields();
        },
        submitForm3(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm3(formName) {
            this.$refs[formName].resetFields();
        },

        submitForm4(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm4(formName) {
            this.$refs[formName].resetFields();
        },

        submitForm5(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm5(formName) {
            this.$refs[formName].resetFields();
        },

        changeV(){
            console.log(this.ruleForm3.date)
        },
        handleChange(value) {
            console.log(value);
        }
    }
})