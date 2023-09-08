  $(function(){
    //htmlロード時の処理
  });
  $(window).on('load', function(){
    //ページ全体が読み込まれた時の処理
    console.log('loadイベントが発生しました')

  });
  $(document).on({
    'scroll' : () => {
        console.log('scrollイベントが発生しました')
    },
});
