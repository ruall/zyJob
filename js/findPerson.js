var app = new Vue({
    el: '#jobList',
    data: {
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
        options1: [
            {
                value: '00001',
                label: '性别不限',
            },
            {
                value: '00002',
                label: '男',
            },
            {
                value: '00003',
                label: '女',
            }
        ],
        options2: [
            {
                value: '001',
                label: '现居住地不限'
            },
            {
                value: '002',
                label: '曾都区'
            },
            {
                value: '003',
                label: '随县'
            },
            {
                value: '004',
                label: '广水市'
            }
        ],
        options3: [
            {
                value: '001',
                label: '学历不限'
            },
            {
                value: '002',
                label: '初中'
            },
            {
                value: '003',
                label: '高中'
            },
            {
                value: '004',
                label: '中专'
            },
            {
                value: '005',
                label: '大专'
            },
            {
                value: '006',
                label: '本科'
            },
            {
                value: '007',
                label: '硕士'
            },
            {
                value: '008',
                label: '博士'
            }
        ],
        options4: [
            {
                value: '001',
                label: '户籍不限'
            },
            {
                value: '002',
                label: '曾都区'
            },
            {
                value: '003',
                label: '随县'
            },
            {
                value: '004',
                label: '广水市'
            },
            {
                value: '005',
                label: '其他'
            }
        ],
        options5: [
            {
                value: '001',
                label: '智能排序'
            },
            {
                value: '002',
                label: '时间排序'
            }
        ],
        workYear:'',
        education:'',
        sex:'',
        select1:'',
        addressList:[
            {
                value: '001',
                label: '不限'
            },
            {
                value: '002',
                label: '曾都区'
            },
            {
                value: '003',
                label: '随县'
            },
            {
                value: '004',
                label: '广水市'
            }
        ],
        welfareList:[
            {
                value: '001',
                label: '在校学生'
            },
            {
                value: '002',
                label: '应届毕业生'
            },
            {
                value: '003',
                label: '1年以上'
            },
            {
                value: '004',
                label: '2年以上'
            },
            {
                value: '005',
                label: '3年以上'
            },
            {
                value: '006',
                label: '4年以上'
            },
            {
                value: '007',
                label: '5年以上'
            },
            {
                value: '008',
                label: '6年以上'
            },
            {
                value: '009',
                label: '7年以上'
            },
            {
                value: '010',
                label: '8年以上'
            },
            {
                value: '011',
                label: '9年以上'
            },
            {
                value: '012',
                label: '10年以上'
            }
        ],
        salaryList:[
            {
                value: '001',
                label: '20岁以下'
            },
            {
                value: '002',
                label: '20-25岁'
            },
            {
                value: '003',
                label: '25-30岁'
            },
            {
                value: '004',
                label: '30-35岁'
            },
            {
                value: '005',
                label: '35-45岁'
            },
            {
                value: '006',
                label: '45岁以上'
            }
        ],
        conditionList:{
            address:'001',
            welfare:'001',
            salary:'001',
        },
        checkList:[
            {
                value:'001',
                label:'应届生'
            },
            {
                value:'002',
                label:'急聘'
            },
            {
                value:'003',
                label:'名企'
            }
        ],
        checkedList:['001'],
        tableData: [
            {
                name: '王小虎',
                info: '女 | 29岁 | 大专 | 5年以上 | 曾都区',
                job: '文员、生产文员、生产计划',
                address: '随州市 | 曾都区 | 广水市',
                date: '2016-05-02',
            },
            {
                name: '王小虎',
                info: '女 | 29岁 | 大专 | 5年以上 | 曾都区',
                job: '文员、生产文员、生产计划',
                address: '随州市 | 曾都区 | 广水市',
                date: '2016-05-02',
            },
            {
                name: '王小虎',
                info: '女 | 29岁 | 大专 | 5年以上 | 曾都区',
                job: '文员、生产文员、生产计划',
                address: '随州市 | 曾都区 | 广水市',
                date: '2016-05-02',
            },
            {
                name: '王小虎',
                info: '女 | 29岁 | 大专 | 5年以上 | 曾都区',
                job: '文员、生产文员、生产计划',
                address: '随州市 | 曾都区 | 广水市',
                date: '2016-05-02',
            },
            {
                name: '王小虎',
                info: '女 | 29岁 | 大专 | 5年以上 | 曾都区',
                job: '文员、生产文员、生产计划',
                address: '随州市 | 曾都区 | 广水市',
                date: '2016-05-02',
            },
            {
                name: '王小虎',
                info: '女 | 29岁 | 大专 | 5年以上 | 曾都区',
                job: '文员、生产文员、生产计划',
                address: '随州市 | 曾都区 | 广水市',
                date: '2016-05-02',
            }
        ],
        workList:[
            {
                workName:'销售1',
                price:'3000-8000',
                name:'随州乐美家房地产营销有限公司',
                address:'曾都区',
                time:'2020-10-28',
                info:'人才交流、中介|50-200人',
                welfare:['年终奖','培训','办公高大上'],
            },
            {
                workName:'销售2',
                price:'3000-8000',
                name:'随州乐美家房地产营销有限公司',
                address:'曾都区',
                time:'2020-10-28',
                info:'人才交流、中介|50-200人',
                welfare:['年终奖','培训','办公高大上'],
            },
            {
                workName:'销售3',
                price:'3000-8000',
                name:'随州乐美家房地产营销有限公司',
                address:'曾都区',
                time:'2020-10-28',
                info:'人才交流、中介|50-200人',
                welfare:['年终奖','培训','办公高大上'],
            },
            {
                workName:'销售4',
                price:'3000-8000',
                name:'随州乐美家房地产营销有限公司',
                address:'曾都区',
                time:'2020-10-28',
                info:'人才交流、中介|50-200人',
                welfare:['年终奖','培训','办公高大上'],
            },
            {
                workName:'销售5',
                price:'3000-8000',
                name:'随州乐美家房地产营销有限公司',
                address:'曾都区',
                time:'2020-10-28',
                info:'人才交流、中介|50-200人',
                welfare:['年终奖','培训','办公高大上'],
            },
            {
                workName:'销售6',
                price:'3000-8000',
                name:'随州乐美家房地产营销有限公司',
                address:'曾都区',
                time:'2020-10-28',
                info:'人才交流、中介|50-200人',
                welfare:['年终奖','培训','办公高大上'],
            },
            {
                workName:'销售7',
                price:'3000-8000',
                name:'随州乐美家房地产营销有限公司',
                address:'曾都区',
                time:'2020-10-28',
                info:'人才交流、中介|50-200人',
                welfare:['年终奖','培训','办公高大上'],
            }
        ],
    }
})