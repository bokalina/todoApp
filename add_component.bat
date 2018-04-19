rem react.js component basic implementation creation helper

@echo off
echo 
Creates new component or container

set /p root="- enter root folder name relative to src: "

set /p folder="- enter component folder name: "

set /p name="- enter component name: "

if not exist src\%root%\%folder% mkdir src\%root%\%folder%

pushd src\%root%\%folder%

echo. > style.css

echo import React from 'react';  >> index.js

echo import './style.css'  >> index.js

echo. >> index.js

echo class %name% extends React.Component { >> index.js

echo   constructor(props){ >> index.js

echo     super(props) >> index.js

echo   } >> index.js

echo. >> index.js

echo   render(){ >> index.js

echo     return ^<p^>%name%^</p^>; >> index.js

echo   } >> index.js

echo } >> index.js

echo. >> index.js

echo export default %name%>> index.js

popd

echo Done!