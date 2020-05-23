(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,n){e.exports=n(282)},119:function(e,t,n){},281:function(e,t,n){},282:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(16),o=n.n(i),r=(n(119),n(17)),c=n(18),l=n(21),u=n(19),p=n(22),d=n(20),h=n(99),m=n.n(h),f=n(23),g=n.n(f),y=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"tokenRequestUrl",value:function(){var e=window.location.protocol+"//"+window.location.host+window.location.pathname,t=encodeURIComponent(e);return"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("aed1fb11b28a4236aafa2241b827155f","&redirect_uri=").concat(t,"&response_type=").concat("token","&scope=").concat(encodeURIComponent(["playlist-modify-public"]))}},{key:"render",value:function(){return s.a.createElement(g.a,{variant:"contained",color:"primary",className:"get_token",target:"",href:this.tokenRequestUrl()},"Authorize Spotify App")}}]),t}(a.Component),v=n(113),b=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).updateChosenGenres=n.updateChosenGenres.bind(Object(p.a)(n)),n.state={error:null,isLoaded:!1,genres:["Loading Genres"]},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"formatGenreData",value:function(e){var t=[];return e.genres.map(function(e){return t.push({value:e,label:e})}),t}},{key:"updateChosenGenres",value:function(e){this.props.updateChosenGenres(e)}},{key:"componentDidMount",value:function(){var e=this,t=this;this.props.spotify.getAvailableGenreSeeds().then(function(e){t.setState({genres:t.formatGenreData(e),isLoaded:!0})},function(t){e.props.invalidateToken()})}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return this.state.error?401===this.state.error.status?s.a.createElement("h3",null,"Token expired, please request a new one:"):s.a.createElement("h3",null,"Error loading Genre List"):this.isLoaded?s.a.createElement("h3",null,"Loading Genre List..."):s.a.createElement("ul",{className:"genreList"},s.a.createElement(v.a,{onChange:this.updateChosenGenres,autoFocus:!0,isMulti:!0,options:this.state.genres,placeholder:"Choose genres"}))}}]),t}(a.Component),k=n(104),C=n.n(k),E=(n(211),n(58)),O=n.n(E),j=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t={min:this.props.minCadence,max:this.props.maxCadence};return s.a.createElement("div",{className:"bpmRangeContainer"},s.a.createElement(O.a,{disableAnimation:!0,className:"bpm_label"},"Song range: ",this.props.minCadence," - ",this.props.maxCadence," beats per minute"),s.a.createElement(C.a,{maxValue:200,minValue:50,draggableTrack:!0,value:t,formatLabel:function(e){return""},onChange:function(t){return e.props.updateCadence(t.min,t.max)}}))}}]),t}(a.Component),L=n(60),N=n.n(L),S=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).getRecommendations=n.getRecommendations.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"updateSongList",value:function(e){this.props.updateSongListNeedsUpdate(!1),this.props.updateSongList(e)}},{key:"getSeedValues",value:function(e){var t=[];return e.forEach(function(e){t.push(e.value)}),t}},{key:"getRecommendations",value:function(){var e=this,t={limit:50,seed_genres:this.getSeedValues(this.props.chosenGenres),target_danceability:.9,min_tempo:this.props.minCadence,max_tempo:this.props.maxCadence};this.props.spotify.getRecommendations(t,function(t,n){t?console.log(t):e.updateSongList(n.tracks)})}},{key:"render",value:function(){return this.props.seedCount>=1&&this.props.seedCount<=5?this.props.songListNeedsUpdate?s.a.createElement("div",null,s.a.createElement(g.a,{variant:"contained",color:"primary",onClick:this.getRecommendations},"Get Songs",s.a.createElement(N.a,{className:"rightIcon"}))):s.a.createElement("div",null,s.a.createElement(g.a,{variant:"outlined",color:"primary",onClick:this.getRecommendations},"Get Songs",s.a.createElement(N.a,{className:"rightIcon"}))):0===this.props.seedCount?s.a.createElement(g.a,{variant:"contained",color:"primary",disabled:!0},"Get Songs"):this.props.seedCount>5?s.a.createElement("div",null,"Please select 5 or less options"):s.a.createElement("div",null,"Something went wrong...")}}]),t}(a.Component),U=n(59),w=n.n(U),G=n(105),T=n.n(G),x=n(108),I=n.n(x),P=n(106),V=n.n(P),_=n(107),R=n.n(_),A=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.songList.map(function(e){return s.a.createElement(T.a,{key:e.uri,alignItems:"flex-start"},s.a.createElement(V.a,null,s.a.createElement(R.a,{src:e.album.images[2].url})),s.a.createElement(I.a,{primary:e.name,secondary:e.album.name}))});return s.a.createElement(w.a,{className:"songList"},e)}}]),t}(a.Component),D=n(110),M=n.n(D),q=n(111),F=n.n(q),W=n(109),z=n.n(W),B=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).getPlaylist=n.getPlaylist.bind(Object(p.a)(n)),n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.state={error:null,isReturned:!1,spotifyUser:null,playlistNameInputValue:"",playlistUrl:""},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getUserId()}},{key:"handleChange",value:function(e){this.setState({playlistNameInputValue:e.target.value})}},{key:"buildSongUriArray",value:function(e){var t=[];return e.map(function(e){return t.push(e.uri)}),t}},{key:"getUserId",value:function(){var e=this;this.props.spotify.getMe().then(function(t){e.setState({spotifyUser:t})},function(e){console.error(e)})}},{key:"fillPlaylist",value:function(e){this.props.spotify.addTracksToPlaylist(e,this.buildSongUriArray(this.props.songList)).then(function(){},function(e){console.error(e)})}},{key:"getPlaylist",value:function(){var e=this,t=""!==this.state.playlistNameInputValue?this.state.playlistNameInputValue:"New Playlist";this.props.spotify.createPlaylist(this.state.spotifyUser.id,{name:t+" (Cadence)",public:!0}).then(function(t){e.fillPlaylist(t.id),e.setState({playlistUrl:t.external_urls.spotify})},function(e){console.error(e)})}},{key:"render",value:function(){return null!=this.state.spotifyUser?s.a.createElement("div",{className:"create_playlist"},s.a.createElement(z.a,{label:"Playlist Name",value:this.state.playlistNameInputValue,onChange:this.handleChange}),s.a.createElement(g.a,{variant:"contained",color:"primary",onClick:this.getPlaylist},"Create Playlist",s.a.createElement(M.a,{className:"rightIcon"})),""!==this.state.playlistUrl?s.a.createElement(g.a,{className:"open_playlist",variant:"contained",href:this.state.playlistUrl,target:"_blank"},"Open Playlist",s.a.createElement(F.a,{className:"rightIcon"})):s.a.createElement(s.a.Fragment,null)):s.a.createElement("div",null)}}]),t}(a.Component),J=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).updateSongListNeedsUpdate=function(e){n.setState({songListNeedsUpdate:e})},n.updateChosenGenres=function(e){n.setState({chosenGenres:e,songListNeedsUpdate:!0})},n.updateSongList=function(e){n.setState({songList:e})},n.updateCadence=function(e,t){n.setState({minCadence:e,maxCadence:t,songListNeedsUpdate:!0})},n.spotify=new m.a,n.props.haveToken&&n.spotify.setAccessToken(n.props.token),n.state={chosenGenres:[],minCadence:170,maxCadence:190,songList:[],songListNeedsUpdate:!0},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.seedCount=this.state.chosenGenres.length,this.props.haveToken&&this.props.tokenValid?s.a.createElement("div",{className:"bodyContainer"},s.a.createElement(b,{spotify:this.spotify,invalidateToken:this.props.invalidateToken,updateChosenGenres:this.updateChosenGenres}),s.a.createElement(j,{minCadence:this.state.minCadence,maxCadence:this.state.maxCadence,updateCadence:this.updateCadence}),s.a.createElement(S,{spotify:this.spotify,invalidateToken:this.props.invalidateToken,updateSongList:this.updateSongList,seedCount:this.seedCount,chosenGenres:this.state.chosenGenres,minCadence:this.state.minCadence,maxCadence:this.state.maxCadence,songListNeedsUpdate:this.state.songListNeedsUpdate,updateSongListNeedsUpdate:this.updateSongListNeedsUpdate}),this.state.songList.length>0?s.a.createElement(B,{spotify:this.spotify,songList:this.state.songList}):s.a.createElement(s.a.Fragment,null),s.a.createElement(A,{songList:this.state.songList})):s.a.createElement("div",{className:"bodyContainer"},s.a.createElement(y,null))}}]),t}(a.Component),$=(n(281),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).invalidateToken=n.invalidateToken.bind(Object(p.a)(n)),n.state={haveToken:!!n.props.accessToken,tokenValid:!0},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"invalidateToken",value:function(){this.setState({tokenValid:!1})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("h4",null,"Skate Playlist Generator")),s.a.createElement(J,{token:this.props.accessToken,haveToken:this.state.haveToken,tokenValid:this.state.tokenValid,invalidateToken:this.invalidateToken}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement($,{accessToken:function(){var e=window.location.hash.match(/#(?:access_token)=([\S\s]*?)&/);return e?e[1]:""}()}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[114,1,2]]]);
//# sourceMappingURL=main.c68edad2.chunk.js.map