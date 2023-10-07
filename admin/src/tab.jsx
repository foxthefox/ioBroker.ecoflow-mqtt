import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '@iobroker/adapter-react/Theme';
import Utils from '@iobroker/adapter-react/Components/Utils';
import TabApp from './tab-app';

let themeName = Utils.getThemeName();

function build() {
	ReactDOM.render(
		<MuiThemeProvider theme={theme(themeName)}>
			<TabApp
				adapterName="ecoflow-mqtt"
				onThemeChange={(_theme) => {
					themeName = _theme;
					build();
				}}
			/>
		</MuiThemeProvider>,
		document.getElementById('root'),
	);
}

build();