"use strict";

// Core deps

// 3rd party deps
import {get} from "http2";
import {toJson} from "xml2json";

// Local deps
// TODO moe to import syntax
const config = require("../config/tls-certificate-transparency-log-alerter-config.js"); // NOTE: Path is relative to build dir (dist/)
const lib = require("./lib/tls-certificate-transparency-log-alerter-lib.js"); // NOTE: Path is relative to build dir (dist/) - local because lib is babel'd

// TODO: Prob rearrange args
lib.checkCTLogs(get, toJson, config.domainNamePatterns, config.checkIntervalSecs, config.expectedCAs, (checkCTLogsErr, checkCTLogsRes) =>
{
    if(checkCTLogsErr)
    {
        throw checkCTLogsErr;
    }

    console.log("RES1: " + JSON.stringify(checkCTLogsRes, null, 2));
});
