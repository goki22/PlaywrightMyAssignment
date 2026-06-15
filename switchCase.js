  function runTest(testType){
     switch (testType){
        case "smoke":
              console.log("Running smoke test");
        break;
        case "regression":
            console.log("Running regression test");
        break;
        case "sanity":
            console.log("Running sanity test");
      break;
      case "performance":
        console.log("Running performance test" )
      break;
        default:
            console.log("Default Running smoke testing");
     }

    }
    runTest ("performance")
