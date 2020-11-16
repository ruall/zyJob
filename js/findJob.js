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
                label: '行业不限',
            },
            {
                value: '00002',
                label: '互联网、电子商务',
            },
            {
                value: '00003',
                label: '计算机业（软件、数据）',
            },
            {
                value: '00004',
                label: '计算机业（硬件、网络）',
            },
            {
                value: '00005',
                label: '电子、微电子技术',
            },
            {
                value: '00006',
                label: '家具、家电、工艺品',
            },
            {
                value: '00007',
                label: '电气',
            },
            {
                value: '00008',
                label: '石油、化工业',
            },
        ],
        options2: [
            {
                value: '001',
                label: '工作不限'
            },
            {
                value: '002',
                label: '在校学生'
            },
            {
                value: '003',
                label: '应届毕业生'
            },
            {
                value: '004',
                label: '1年以上'
            },
            {
                value: '005',
                label: '2年以上'
            },
            {
                value: '006',
                label: '3年以上'
            },
            {
                value: '007',
                label: '4年以上'
            },
            {
                value: '008',
                label: '5年以上'
            },
            {
                value: '009',
                label: '6年以上'
            },
            {
                value: '010',
                label: '7年以上'
            },
            {
                value: '011',
                label: '8年以上'
            },
            {
                value: '012',
                label: '9年以上'
            },
            {
                value: '013',
                label: '10年以上'
            },
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
        workYear:'',
        education:'',
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
                label: '不限'
            },
            {
                value: '002',
                label: '五险'
            },
            {
                value: '003',
                label: '公积金'
            },
            {
                value: '004',
                label: '包吃'
            },
            {
                value: '005',
                label: '包住'
            },
            {
                value: '006',
                label: '双休'
            },
            {
                value: '007',
                label: '带薪年假'
            },
            {
                value: '008',
                label: '交通补贴'
            },
            {
                value: '009',
                label: '年终奖'
            }
        ],
        salaryList:[
            {
                value: '001',
                label: '2000以下'
            },
            {
                value: '002',
                label: '2000-4000'
            },
            {
                value: '003',
                label: '4000-6000'
            },
            {
                value: '004',
                label: '6000-8000'
            },
            {
                value: '005',
                label: '8000-1万'
            },
            {
                value: '006',
                label: '1万-1.5万'
            },
            {
                value: '007',
                label: '1.5万-2万'
            },
            {
                value: '008',
                label: '2万-3万'
            },
            {
                value: '009',
                label: '3万-4万'
            },
            {
                value: '010',
                label: '4万-5万'
            },
            {
                value: '011',
                label: '5万以上'
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
        recommendList:[
            {
                img:'./images/img1.jpg',
                name:'湖北随州双星生物湖北随州双星生物湖北随州双星生物',
                job:'销售经理',
                price:'5000-8000',
            },
            {
                img:'./images/img1.jpg',
                name:'湖北随州双星生物湖北随州双星生物湖北随州双星生物',
                job:'销售经理',
                price:'5000-8000',
            },
            {
                img:'./images/img1.jpg',
                name:'湖北随州双星生物湖北随州双星生物湖北随州双星生物',
                job:'销售经理',
                price:'5000-8000',
            },
            {
                img:'./images/img1.jpg',
                name:'湖北随州双星生物湖北随州双星生物湖北随州双星生物',
                job:'销售经理',
                price:'5000-8000',
            },
            {
                img:'./images/img1.jpg',
                name:'湖北随州双星生物湖北随州双星生物湖北随州双星生物',
                job:'销售经理',
                price:'5000-8000',
            }
        ]
    }
})