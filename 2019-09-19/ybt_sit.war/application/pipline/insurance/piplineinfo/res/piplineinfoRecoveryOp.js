 var vueobj=[];
var vue_config = [];
var vueMethods={};
var baseUrl ="/pipline/insurance/piplineinfo";
        
        
        var commonCombobox_option={
        		 commonCombobox_insurancecom : {
        			 url : path + '/newContEnter/selectFromLacomByBankplace/#bankplace.do',
        			    valueField : "agentcom",
        			    // 显示在输入框的
        			    inputText : "name",
        			    // 显示在下拉列表的项，默认空，空则全部显示
        			    textShow : ["name" ]
        		    /*textShowFormat: function(textShow,linedata){
        	        	return  "测试" +   textShow;
        	        }*/
        		}
        	,   commonCombobox_riskcode : {
        		  url : path + '/newContEnter/selectFromLmriskByInsurancecom/#bankplace/#insurance.do',
        		    valueField : "riskCode"
        		    // 显示在输入框的
        		    ,inputText : "riskName"
        		    ,textShow : ["riskName" ]
        		}

        };
    	/*commonCombobox_option.commonCombobox_branchauth= {
    		    url : path + '/pipline/common/branch/authUser.do',
    		    valueField : "comcode",
    		    // 显示在输入框的
    		    inputText : "comname",
    		    // 显示在下拉列表的项，默认空，空则全部显示
    		    textShow : ["comname" ] 
    		};*/
    			
    		commonCombobox_option.commonCombobox_pe = {
    		    url : path + '/pipline/common/peUser/#branch.do',
    		    valueField : "emplid",
    		    // 显示在输入框的
    		    inputText : "name",
    		    // 显示在下拉列表的项，默认空，空则全部显示
    		    textShow : [ "emplid","name" ] 
    		};
    		
    		commonCombobox_option.commonCombobox_pipestatus = {
            		"data" : [ {
        				"value" : "0",
        				"text" : "待签"
        			}, {
        				"value" : "1",
        				"text" : "待核"
        			}, {
        				"value" : "2",
        				"text" : "待扣"
        			}, {
        				"value" : "3",
        				"text" : "生效"
        			}, {
        				"value" : "4",
        				"text" : "退保"
        			}]
        	};

    		 //大区
        	commonCombobox_option.commonCombobox_bankPlace = {
        			url : path + '/pipline/common/getBankplace.do',
        		    valueField : "bankplace",
        		    // 显示在输入框的
        		    inputText : "bankplace",
        		    // 显示在下拉列表的项，默认空，空则全部显示
        		    textShow : ["bankplace" ]
        	};
        	//City/Division
        	commonCombobox_option.commonCombobox_citydivision = {
//        			url : path + '/pipline/city/#bankplace.do',
        			url : path + '/pipline/common/getBankplace/#bankplace.do',
        		    valueField : "dvcode",
        		    // 显示在输入框的
        		    inputText : "dvcode",
        		    // 显示在下拉列表的项，默认空，空则全部显示
        		    textShow : ["dvcode" ] 
        	};
    		
        	//查询页 支行和RM级联
        	commonCombobox_option.commonCombobox_branchauth = {
        			url : path + '/pipline/common/getBankplace/#bankplace/#citydivision.do',
        		    valueField : "comcode",
        		    // 显示在输入框的
        		    inputText : "comname",
        		    // 显示在下拉列表的项，默认空，空则全部显示
        		    textShow : ["comname" ] 
        	};
    		
        	commonCombobox_option.commonCombobox_rm = {
    			    url : path + '/pipline/common/rmUser/#branch.do',
    			    valueField : "emplid",
    			    // 显示在输入框的
    			    inputText : "name",
    			    // 显示在下拉列表的项，默认空，空则全部显示
    			    textShow : ["emplid","name" ] 
    			};
        	//查询页面成功率下拉选项
    		commonCombobox_option.commonCombobox_successrateOp = {
    				url : path + '/newCont/codeselect/common/pipeline_Oprate.do',
    				valueField : "code",
//    				relateType: "vue",
    				// 显示在输入框的
    				inputText :  "codename" ,
    				textShow : [ "codename" ]
    		};	
    		
    		
    		
    		
    		
    		
window.actionEvents = { 
    'click .recovery': function (e, value, row, index) {

    	if(!confirm("是否确定取消："+row.piplineinfo.piplineno)){
    		return ;
    	}
    	var url = getRealURL(baseUrl+"/recoveryPipline/"+row.piplineinfo.piplineno);;
    	
    	simpleAjaxREST(url,"PUT",{},{}
    		,function(data){
    		
    			 $("#search").click();
//    			if(data.flag){
//    				alert("恢复成功");
//    			}else{
//    				alert(data.desc);
//    			}
    		}
    		,function(data){
    			alert(data.desc);
    		});
    
    
    } 
};
 
 
//function afterRowEdit(element, row, index) {
//    if (element.attr("id") == "table_keyword") {
//
//        var data = element.bootstrapTable("getData");
//        var rows = $('#tablebatch').bootstrapTable("getSelections");
//
//        for (var i = 0; i < rows.length; i++) {
//            rows[i].monitorLevel[0].keywords = data;
//            $('#tablebatch').bootstrapTable("updateRow", {
//                index : rows[i]._row_index,
//                row : rows[i]
//            });
//        }
//    }
//
//}
//
//function initTest() {
//    initData($("#testdivchange"));
//    recoveryPageinit
//}
vue_config.push({id : "piplineinfoOp", url : "/pipline/insurance/piplineinfo/recoveryPageinit"});

var col = [
//           {
//               field : 'metentid',
//               title : '序号',
//               formatter : function(value, row, index) {
//                   return index + 1;
//               }
//           }, 
			{
               title: '操作',
               align: 'center',
               formatter: actionFormatter,
               events: actionEvents/*,
               switchable: false*/
           },{
               field : 'piplineinfo.customerid',
               title : '客户号' 
           }, {
               field : 'piplineinfo.appntname',
               title : '客户姓名', 
           }, {
               field : 'piplineinfo.mobile',
               title : '联系电话',
               visible : false
           }, {
               field : 'piplineinfo.existcust',
               title : '是否现有客户',
               visible : false,
               formatter : function(value, row, index) {
                   return (value == "Y")?"是":"否";
               }
           },{
               field : 'piplineinfo.branch',
               title : '销售人员支行',
               visible : false
           },
           {
               field : 'piplineinfo.rmid',
               title : '销售人员',
               visible : false
           },
           {
               field : 'piplineinfo.referra',
               title : '介绍人工号',
               visible : false
           },
           {
               field : 'piplineinfo.lastmeet',
               title : '上次约见',
               visible : false
           },
           {
               field : 'piplineinfo.nextmeet',
               title : '下次约见',
               visible : false
           },{
               field : 'lccont.appflag',
               title : 'pipeline状态' ,
               formatter: flagFormatter
           },{
               field : 'lcont.debitdate',
               title : '扣款日期',
               visible : false
           },{
               field : 'piplineinfo.receipt',
               title : '回执日期',
               visible : false,
               formatter : formatReceipt
           },
           {
               field : 'piplineinfo.insurance',
               title : '保险公司',
               visible : false
           },{
               field : 'piplineinfo.riskname',
               title : '产品名称' ,
               visible : true
           },{
               field : 'piplineinfo.riskcode',
               title : '产品代码' ,
               visible : true
           },{
               field : 'piplineinfo.payendyear',
               title : '缴费年限' ,
               visible : false,
               formatter : formatPayendyear
           },
           {
               field : 'piplineinfo.prem',
               title : '年化保费',
               formatter: formatYearPrem
           },{
               field : 'piplineinfo.peid',
               title : '陪同销售',
               visible : false
           },
           {
               field : 'piplineinfo.autodropflag',
               title : '取消方式' ,
               formatter: autodropflagFormatter
            	   
           },{
               field : 'lccont.prem',
               title : '实际发生保费',
               formatter: formatNumber
           },{
               field : 'piplineinfo.presigndate',
               title : '预计签单日' 
           },{
               field : 'piplineinfo.successrate',
               title : '成功率',
               visible : false,
               formatter : formatSuccessRate
           },{
               field : 'piplineinfo.remark',
               title : '备注',
               visible : false
           },{
               field : 'piplineinfo.mgremark',
               title : '管理者备注',
               visible : false
           },
           {
               field : 'piplineinfo.createdata',
               title : '创建天数',
               formatter : calculateDays,
               visible : false
           }];


$(function() {
    $("#search").click(function () {
    	var start = $("#querystartday").val();
        var end = $("#queryendday").val();
        if(start != "" && end != ""){
        	 if(!compareDate(start,end)){
        		 alert("请正确填写预计签单起始与截止日期！");
        		 return;
        	 }
        }
//    	$("#form123").data('bootstrapValidator').validate()
//    	alert($("#testdivchange").data('bootstrapValidator').validate());
//    	alert($("#testdivchange").data('bootstrapValidator').validateField($("#insurancecom_combobox")));
        $("#cusTable").bootstrapTable('destroy');
//        var that = vueobj["piplineinfoOp"];
        // data url
        var url_d = "/pipline/insurance/piplineinfo/dropinfoWithYbt.do";
        url_d =url_d +"?"  +
        $("#piplineinfoOp_form").serialize();
        
        if($("#bankplace_combobox").attr("disabled") == "disabled"){
        	url_d = url_d + /*"&piplineinfo.bankplace=" + $("bankplace").val()
        			+ "&piplineinfo.citydivision=" + $("citydivision").val()
        			+ */"&piplineinfo.branch=" + $("#branch").val()
        			+ "&piplineinfo.rmid=" + $("#rmid").val();
        }
        
        tableInit(url_d, $('#cusTable'), col);
        document.getElementById("btn_export_droped_excel").style.display = "block";
    }); 
   
  //excel导出
    $("#btn_export_droped_excel").click(function () {
//    	var url = "/pipline/insurance/piplineinfo/exportDropedExcel.do?" + $("#piplineinfoOp_form").serialize() ;
//    	window.location.href = path + url;
    	
    	var showdilog= layer.load(2, {
			  shade:0.3, //0.2透明度的白色背景
		 });
		$.ajax({				
			type : "GET",
			url: path+"/pipline/insurance/piplineinfo/exportDropedExcel.do",// 后台请求URL地址	
			data : $("#piplineinfoOp_form").serialize(),
			success : function(data) {
				if(data.success){
					var url = path + "/application/pipline/insurance/piplineinfo/jsp/download.jsp?path="+data.parm+"&a="+"sdf";
					var title = "";
					var strhref = url + "?title=" + title;
					location.href = strhref;
					layer.close(showdilog);
				}else{
					alert(data.msg);
					layer.close(showdilog);
				}				
			},
			 error : function() {
				 alert("系统异常");
				 layer.close(showdilog);
			}
		});	
    	
   });
});

 

function tableInit(url, obj, col,  queryParams) {
    obj.bootstrapTable({
        url : path + url, // 请求后台的URL（*）
        dataType : "json",
        method : 'GET', // 请求方式（*）
        contentType : "application/x-www-form-urlencoded",
        toolbar : '#toolbar',
        columns : col,
        striped : true, // 是否显示行间隔色
        cache : false, // 是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination : true, // 是否显示分页（*）
        queryParamsType : "limit",// undefined/limit
      //  queryParams : queryParams,// 传递参数（*）
        sidePagination : "server", //
        pageList : [ 10, 25, 50, 100 ], // 可供选择的每页的行数（*）
        search : false, // 是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
        strictSearch : true,// 设置为 true启用 全匹配搜索，否则为模糊搜索
        showColumns : true, // 是否显示所有的列
        showRefresh : true, // 是否显示刷新按钮
        minimumCountColumns : 2, // 最少允许的列数
        clickToSelect : true, // 是否启用点击选中行
        // height: 500, //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        // uniqueId: "ID", // 每一行的唯一标识，一般为主键列
        uniqueId : "piplineinfo.piplineno", // 每一行的唯一标识，一般为主键列
        showToggle : true, // 是否显示详细视图和列表视图的切换按钮
        cardView : false, // 是否显示详细视图
        detailView : false,
//        showExport: false,
//        exportDataType:'all',
//   	 	exportTypes : [ 'excel' ],
//   		//表格导出数据设置
//   		exportOptions : {
//   			ignoreColumn : [0],
//   			fileName : "已drop的pipeline信息"+new Date().toLocaleString(),
//   			worksheetName : "pipeline",
//   			tableName : "pipeline"
//   		},
        rowStyle :function (row, index) {
        	var style = {};
        	style['css'] = {"background-color": "red"};
        	if(compareDateNow(row.piplineinfo.presigndate)){
        		return style;
        	}
        	return {};
        }
    });
};

function actionFormatter(value, row, index) {
    return [
         '<div  class="col-sm-4"><button type="button"  class="btn recovery">恢复</button></div>' 
    ].join('');
}

//取消方式
function autodropflagFormatter(value, row, index) {
	
	if(row.piplineinfo.autodropflag=="1"){
		
		return "自动取消";
	}
	 
	if(row.piplineinfo.autodropflag=="2"){
		
		return "手动取消";
	}
    return  "";
}

//处理年化保费
function formatYearPrem(value, row, index) {
	var status = flagFormatter(value, row, index);
	var yearPrem = value;
	
	if(status == "生效"){
		var transno = row.piplineinfo.transno;
		var insurancecom = row.lccont.insurancecom;
		
		$.ajax({
			type : "POST",
			url : path + '/pipline/insurance/piplineinfo/queryYearsPrem.do',  
			data : {"transno":transno,"insurancecom":insurancecom},
			dataType : "json",
			async: false,
			success:function(data) {
				if(data.success){
					yearPrem = Number(data.map.yearsPrem);
				}else{
					alert(data.msg);
				}			
			},
			error:function(){
			   alert("查询年化保费异常");
			}
		});
	}
	var	res = formatNumber(yearPrem, row, index);
	return res;
}
