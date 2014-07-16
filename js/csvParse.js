function parseCSV() {
    console.log("in parseCSV");
    return d3.csv("../data/budget-information-test.csv",
        //accessor.  Controls how data is structured as it's pulled in
        function(d) {
            return {
                //  "ID": 1,
                //  "Class": "NormalizedBudgetLine",
                //  "Created": 1400189228,
                //  "CreatorID": 1,
                "FunctionClass": d.FUNCTION_CLASS,
                "FunctionClassName": d.FUNCTION_CLASS_NAME,
                "FunctionGroup": d.FUNCTION_GROUP,
                "FunctionGroupName": d.FUNCTION_GROUP_NAME,
                "Function": d.FUNCTION,
                "FunctionName": d.FUNCTION_NAME,
                "ActivityCode": d.ACTIVITY_CODE,
                "ActivityName": d.ACTIVITY_NAME,
                "CurrentOperating": +d.OPERATING_CYEST_LUMPSUM_AMT,
                "CurrentGrant": +d.GRANT_CYEST_LUMPSUM_AMT,
                "CurrentCapital": +d.CAPITAL_CYEST_LUMPSUM_AMT,
                "CurrentOther": +d.OTHER_CYEST_LUMPSUM_AMT,
                "CurrentTotal": +d.CYEST_LUMPSUM_TOT,
                "ProposedOperating": +d.OPERATING_ACT_LUMPSUM_AMT,
                "ProposedGrant": +d.GRANT_ACT_LUMPSUM_AMT,
                "ProposedCapital": +d.CAPITAL_ACT_LUMPSUM_AMT,
                "ProposedOther": +d.OTHER_ACT_LUMPSUM_AMT,
                "ProposedTotal": +d.ACT_LUMPSUM_TOT,
                "RunDate": d.RUN_DATE.replace(RegExp("/", "g"), "-")
            }
        },
        //callback.  Actions to take after csv file has been fully parsed
        function(dataArray) {
            //dataArray contains an array of objects, 1 for each row of the csv file
            //object property names correspond to csv headings (FUNCTION, ACTIVITY_CODE, etc)
            //property values correspond to matching values
            //this essentially the same as the Budget-list-normalized.json file, except the property names are slightly different
            console.log(dataArray.valueOf());

            var normalizedData = {};
            dataArray.forEach(function(d) {});
        });
}

var testData = parseCSV();