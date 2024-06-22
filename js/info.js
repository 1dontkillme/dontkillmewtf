const username = '1dontkillme';
const repository = 'dontkillmewtf';

const apiUrl = `https://api.github.com/repos/${username}/${repository}/commits`;

async function getLastCommitDate() {
    try {
        const response = await fetch(apiUrl);
        const commits = await response.json();
        if (commits.length > 0) {
            const lastCommitDate = commits[0].commit.committer.date;
            const lastUpdate = new Date(lastCommitDate).toLocaleString();
            document.getElementById('lastUpdate').innerHTML = `Last update: ${lastUpdate}`;
        } else {
            document.getElementById('lastUpdate').innerHTML = 'No accessible commits';
        }
    } catch (error) {
        console.error('Error when data parsing:', error);
        document.getElementById('lastUpdate').innerHTML = '<span style="color:red">Critical error when some data parsing. Please, DM site owner.</span>';
    }
}

async function getUserIP() {
    try {
        const response = await fetch(`https://api.ipify.org?format=json`);
        const data = await response.json();

        document.getElementById('userIp').innerHTML = `User IP Address: ${data.ip}`;
    } catch (error) {
        console.error('Error when get IP', error);
        document.getElementById('userIp').innerHTML = '<span style="color:red">Critical error when some data parsing. Please, DM site owner.</span>';
    }
}

async function getUptime() {
    try {
        const os = require('os');
        const upTime = os.uptime();
        
        document.getElementById('serverUptime').innerHTML = `Server uptime is ${upTime} seconds`
    } catch (error) {
        console.error('Error when get Server Uptime', error);
        document.getElementById('serverUptime').innerHTML = '<span style="color:red">Critical error when some data parsing. Please, DM site owner.</span>';
    }
}

async function getServerInfo() {
    try {
        const serverHeader = response.headers.get('Server');
        const connectionHeader = response.headers.get('Connection')

        document.getElementById('serverStatus').innerHTML = `Server Status: ${serverHeader}`;
        document.getElementById('connectionStatus').innerHTML = `Connection Status: ${connectionHeader}`;
    } catch (error) {
        console.error('Error when get getServerInfo', error);
        document.getElementById('serverStatus').innerHTML = '<span style="color:red">Critical error when some data parsing. Please, DM site owner.</span>';
        document.getElementById('connectionStatus').innerHTML = '<span style="color:red">Critical error when some data parsing. Please, DM site owner.</span>';
    }
}

getLastCommitDate();
getUptime();
getUserIP();
getServerInfo();