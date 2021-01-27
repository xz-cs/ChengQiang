<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

use Flarum\Extend;
use Flarum\Frontend\Document;
use s9e\TextFormatter\Configurator; 
use Illuminate\Contracts\Events\Dispatcher;

return [
    
    
    // custom
    (new Extend\Frontend('forum'))
        ->css(__DIR__ . '/heimu/css.less'),
    
    (new Extend\Frontend('forum'))
        ->css(__DIR__ . '/fontawesome/css/all.css'),
    (new Extend\Formatter)
    ->configure(function (Configurator $config) {
		$config->BBCodes->addCustom('[FA]{IDENTIFIER}[/FA]', '<i class="fas fa-{IDENTIFIER}"></i>'); // for compatibility reasons
		$config->BBCodes->addCustom('[FAS]{IDENTIFIER}[/FAS]', '<i class="fas fa-{IDENTIFIER}"></i>');
		$config->BBCodes->addCustom('[FAR]{IDENTIFIER}[/FAR]', '<i class="far fa-{IDENTIFIER}"></i>');
		$config->BBCodes->addCustom('[FAL]{IDENTIFIER}[/FAL]', '<i class="fal fa-{IDENTIFIER}"></i>');
		$config->BBCodes->addCustom('[FAB]{IDENTIFIER}[/FAB]', '<i class="fab fa-{IDENTIFIER}"></i>');
		$config->BBCodes->addCustom('[FAB]{IDENTIFIER}[/FAB]', '<i class="fab fa-{IDENTIFIER}"></i>');
		
		$config->BBCodes->addCustom('[bgcolor={COLOR}]{TEXT}[/bgcolor]', '<span style="background-color: {COLOR};">{TEXT}</span>');
		$config->BBCodes->addCustom('[font={SIMPLETEXT}]{TEXT}[/font]', '<span style="font-family: {SIMPLETEXT};">{TEXT}</span>');
		$config->BBCodes->addCustom('[spoiler]{TEXT}[/spoiler]', '<div class="spoiler"><div class="spoilerheader"><input type="button" style="margin: 1px; width: 145px; height: 33px;" class="spoilerbutton Button Button--icon hasIcon" value="展开 / 收起隐藏文字" onclick=\'n = this.parentNode.parentNode.lastChild; if(n.style.display == "none") {n.style.display = "block";} else {n.style.display = "none";} return false;\'></div><div class="spoilerbody" style="display: none; border-style: solid; border-width: thin; padding: 3px; border-color: #9e005d;">{TEXT}</div></div>');
		$config->BBCodes->addCustom('[ruby={TEXT2}]{TEXT1}[/ruby]', '<span><ruby><rb>{TEXT1}</rb><rp>（</rp><rt style="font-size:0.75em">{TEXT2}</rt><rp>）</rp></ruby></span>');
		
		$config->BBCodes->addCustom('[table={NUMBER}]{TEXT}[/table]', '<table border style="width: {NUMBER}%;">{TEXT}</table>');
		$config->BBCodes->addCustom('[tr]{TEXT}[/tr]', '<tr>{TEXT}</tr>');
		$config->BBCodes->addCustom('[td]{TEXT}[/td]', '<td style="border-style: solid; border-width: thin; padding: 3px; border-color: #9e005d;">{TEXT}</td>');
		
		$config->BBCodes->addCustom('[heimu={TEXT2}]{TEXT1}[/heimu]', '<span class="heimu" title="{TEXT2}">{TEXT1}</span>');
		
	    $config->BBCodes->addCustom('[iframe={NUMBER}]{URL}[/iframe]', '<iframe src="{URL}" style="border-style: solid; border-width: thin; padding: 3px; border-color: #9e005d; width: 100%; height: {NUMBER}em;"></iframe>'); 
		// The line above will cause a fatal error in flarum, but I don't know why...   -- Xun Zhang 2021/1/16
		// Fixed. Remember to use {URL} to indicate a url replacement instead of {TEXT}!  -- Xun Zhang 2021/1/20
		
		$config->BBCodes->addCustom('[prog]{NUMBER}[/prog]', '<progress value="{NUMBER}" max="100"></progress>');
		$config->BBCodes->addCustom('[details]{TEXT}[/details]', '<details>{TEXT}</details>');
		$config->BBCodes->addCustom('[summary]{TEXT}[/summary]', '<summary>{TEXT}</summary>');
		
    }),
    
    
    
    // BBCode Alerts
    (new Extend\Frontend('forum'))
        ->css(__DIR__ . '/bbcode-alerts/resources/less/forum.less'),
    (new Extend\Formatter)
        ->configure(function (Configurator $config) {
            $config->BBCodes->addCustom(
                '[awarning]{TEXT}[/awarning]',
                '<div id="aaalertbody"><div class="aaalert aaerror"><p class="aainner"><strong>Warning! </strong>{TEXT}</p></div></div>'
            );

            $config->BBCodes->addCustom(
                '[asuccess]{TEXT}[/asuccess]',
                '<div id="aaalertbody"><div class="aaalert aasuccess"><p class="aainner">{TEXT}</p></div></div>'
            );

            $config->BBCodes->addCustom(
                '[ainfo]{TEXT}[/ainfo]',
                '<div id="aaalertbody"><div class="aaalert aainfo"><p class="aainner">{TEXT}</p></div></div>'
            );

            $config->BBCodes->addCustom(
                '[abasic]{TEXT}[/abasic]',
                '<div id="aaalertbody"><div class="aaalert"><p class="aainner">{TEXT}</p></div></div>'
            );

            $config->BBCodes->addCustom(
                '[acustom]{COLOR},{COLOR2},{COLOR3},{TEXT}[/acustom]',
                '<div id="aaalertbody"><div class="aaalert"><p class="aainner" style="color: {COLOR}; background-color: {COLOR2}; border-color: {COLOR3};">{TEXT}</p></div></div>'
            );

            $config->BBCodes->addCustom(
                '[bcustom]title={TEXT} font={COLOR} bg={COLOR2} border={COLOR3}[/bcustom]',
                '<div id="aaalertbody"><div class="aaalert"><p class="aainner" style="color: {COLOR}; background-color: {COLOR2}; border-color: {COLOR3};">{TEXT}</p></div></div>'
            );

            $config->BBCodes->addCustom(
                '[berror]{TEXT}[/berror]',
                '<div id="aaalertbody"><div class="bbalert-box bberror"><span>ERROR: </span>{TEXT}</div></div>'
            );

            $config->BBCodes->addCustom(
                '[cerror]{COLOR},{COLOR2},{COLOR3},{TEXT},{TEXT2}[/cerror]',
                '<div id="aaalertbody"><div class="bbalert-box bberror" style="color: {COLOR}; background-color: {COLOR2}; border-color: {COLOR3};"><span>{TEXT}: </span>{TEXT2}</div></div>'
            );

            $config->BBCodes->addCustom(
                '[bsuccess]{TEXT}[/bsuccess]',
                '<div id="aaalertbody"><div class="bbalert-box bbsuccess"><span>SUCCESS: </span>{TEXT}</div></div>'
            );

            $config->BBCodes->addCustom(
                '[csuccess]{COLOR},{COLOR2},{COLOR3},{TEXT},{TEXT2}[/csuccess]',
                '<div id="aaalertbody"><div class="bbalert-box bbsuccess" style="color: {COLOR}; background-color: {COLOR2}; border-color: {COLOR3};"><span>{TEXT}: </span>{TEXT2}</div></div>'
            );

            $config->BBCodes->addCustom(
                '[bwarning]{TEXT}[/bwarning]',
                '<div id="aaalertbody"><div class="bbalert-box bbwarning"><span>WARNING: </span>{TEXT}</div></div>'
            );

            $config->BBCodes->addCustom(
                '[cwarning]{COLOR},{COLOR2},{COLOR3},{TEXT},{TEXT2}[/cwarning]',
                '<div id="aaalertbody"><div class="bbalert-box bbwarning" style="color: {COLOR}; background-color: {COLOR2}; border-color: {COLOR3};"><span>{TEXT}: </span>{TEXT2}</div></div>'
            );

            $config->BBCodes->addCustom(
                '[bnotice]{TEXT}[/bnotice]',
                '<div id="aaalertbody"><div class="bbalert-box bbnotice"><span>Notice: </span>{TEXT}</div></div>'
            );

            $config->BBCodes->addCustom(
                '[cnotice]{COLOR},{COLOR2},{COLOR3},{TEXT},{TEXT2}[/cnotice]',
                '<div id="aaalertbody"><div class="bbalert-box bbnotice" style="color: {COLOR}; background-color: {COLOR2}; border-color: {COLOR3};"><span>{TEXT}: </span>{TEXT2}</div></div>'
            );

            $config->BBCodes->addCustom(
                '[derror title="{TEXT}" font="{COLOR}" bg="{COLOR2}" border="{COLOR3}"]{TEXT2}[/derror]',
                '<div id="aaalertbody"><div class="bbalert-box bberror" style="color: {COLOR}; background-color: {COLOR2}; border-color: {COLOR3};"><span>{TEXT}: </span>{TEXT2}</div></div>'
            );

            $config->BBCodes->addCustom(
                '[dsuccess title="{TEXT}" font="{COLOR}" bg="{COLOR2}" border="{COLOR3}"]{TEXT2}[/dsuccess]',
                '<div id="aaalertbody"><div class="bbalert-box bbsuccess" style="color: {COLOR}; background-color: {COLOR2}; border-color: {COLOR3};"><span>{TEXT}: </span>{TEXT2}</div></div>'
            );

            $config->BBCodes->addCustom(
                '[dwarning title="{TEXT}" font="{COLOR}" bg="{COLOR2}" border="{COLOR3}"]{TEXT2}[/dwarning]',
                '<div id="aaalertbody"><div class="bbalert-box bbwarning" style="color: {COLOR}; background-color: {COLOR2}; border-color: {COLOR3};"><span>{TEXT}: </span>{TEXT2}</div></div>'
            );

            $config->BBCodes->addCustom(
                '[dnotice title="{TEXT}" font="{COLOR}" bg="{COLOR2}" border="{COLOR3}"]{TEXT2}[/dnotice]',
                '<div id="aaalertbody"><div class="bbalert-box bbnotice" style="color: {COLOR}; background-color: {COLOR2}; border-color: {COLOR3};"><span>{TEXT}: </span>{TEXT2}</div></div>'
            );
        }),
        
        
        
        // Back to Top
    (new Extend\Frontend('forum'))
    ->css(__DIR__ . '/backtop/resources/less/extension.less'),
    (new Extend\Frontend('forum'))
        ->content(function (Document $document) {
            $document->foot[] = '
            <!-- BackTop -->
            <script src="https://www.cssaug.org/assets/js/backtop.js"></script>
            <a href="#" class="scroll-up" style="display: none;" title="回到顶部">
                <i class="fas fa-chevron-up"></i>
            </a>
            <!-- BackTop -->
            ';
        }),
        
        
        
        // ACGembed
        (new Extend\Formatter)
        ->configure(function (Configurator $config) {
            $config->MediaEmbed->add(
                'xiami',
                [
                    'host'	  => 'xiami.com',
                    'extract' => "!xiami\.com/song/(?'xmid'[-0-9]+)!",
                    'iframe' => [
                        'height' => 170,
                        'src'  => '//www.xiami.com/webapp/embed-player?autoPlay=1&id={@xmid}',
                    ]
                ]
            );
            $config->MediaEmbed->add(
                'music163',
                [
                    'host'    => 'music.163.com',
                    'extract' => '!music\\.163\\.com/(#/)?(?\'mode\'song|album|playlist)((\\?id=)|(\\/))(?\'id\'\\d+)!',
                    'choose'  => [
                        'when' => [
                            [
                                'test' => '@mode = \'album\'',
                                'iframe'  => [
                                    'src'    => '//music.163.com/outchain/player?type=1&id={@id}&auto=0&height=450'
                                ]
                            ],
                            [
                                'test' => '@mode = \'song\'',
                                'iframe'  => [
                                    'height' => 155,
                                    'src'    => '//music.163.com/outchain/player?type=2&id={@id}&auto=0&height=66'
                                ]
                            ]
                        ],
                        'otherwise' => [
                            'iframe'  => [
                                'src'    => '//music.163.com/outchain/player?type=0&id={@id}&auto=0&height=450'
                            ]
                        ]
                    ]
                ]
            );
			 $config->MediaEmbed->add(
				'acfun',
				[
					'host'	  => 'acfun.cn',
					'extract' => "!acfun\.cn/v/ac(?'acid'[-0-9]+)!",
					'iframe' => [
						'src'  => '//www.acfun.cn/player/ac{@acid}'
					]
				]
			);
			 $config->MediaEmbed->add(
				'bilibili',
				[
					'host'	  => ['bilibili.com','b23.tv',],
					'extract' => [
						"!bilibili\.com/video(/av(?'aid'[-0-9]+))|(/BV(?'bvid'[-0-9A-Z_a-z]+))(\?p=(?'pn'[-0-9]+))?!",
						"!b23\.tv/(/av(?'aid'[-0-9]+))|(/BV(?'bvid'[-0-9A-Z_a-z]+))(/p(?'pn'[-0-9]+))?!"
					],
					'iframe' => [
						'src'  => '//player.bilibili.com/player.html?aid={@aid}&bvid={@bvid}&page={@pn}'
					]
				]
			);
            $config->MediaEmbed->add(
                'niconico',
                [
                    'host'	  => ['nicovideo.jp','nico.ms'],
                    'extract' => [
                        "!nicovideo\.jp/watch/sm(?'smid'[-0-9]+)!",
                        "!nico\.ms/sm(?'smid'[-0-9]+)!",
                    ],
                    'iframe' => [
                        'src'  => '//embed.nicovideo.jp/watch/sm{@smid}'
                    ]
                ]
            );
            $config->MediaEmbed->add(
                'qq',
                [
                    'host'    => 'qq.com',
                    'extract' => [
                        "!qq\\.com/x/cover/\\w+/(?'id'\\w+)\\.html!",
                        "!qq\\.com/x/cover/\\w+\\.html\\?vid=(?'id'\\w+)!",
                        "!qq\\.com/cover/[^/]+/\\w+/(?'id'\\w+)\\.html!",
                        "!qq\\.com/cover/[^/]+/\\w+\\.html\\?vid=(?'id'\\w+)!",
                        "!qq\\.com/x/page/(?'id'\\w+)\\.html!",
                        "!qq\\.com/page/[^/]+/[^/]+/[^/]+/(?'id'\\w+)\\.html!"
                    ],
                    'iframe'  => [
                        'width'  => 760,
                        'height' => 450,
                        'src'    => '//v.qq.com/txp/iframe/player.html?vid={@id}&tiny=0&auto=0'
                    ]
                ]
            );
            $config->MediaEmbed->add(
                'acgtv',
                [
                    'host'    => 'acg.tv',
                    'extract' => '!acg\\.tv/(?\'mode\'av|ac|sm)(?\'idhao\'\\d+)(\?p=(?\'pn\'[-0-9]+))?!',
                    'choose'  => [
                        'when' => [
                            [
                                'test' => '@mode = \'av\'',
                                'iframe'  => [
                                    'src'    => '//player.bilibili.com/player.html?aid={@idhao}'
                                ]
                            ],
                            [
                                'test' => '@mode = \'ac\'',
                                'iframe'  => [
                                    'src'    => '//www.acfun.cn/player/ac{@idhao}'
                                ]
                            ],
                            [
                                'test' => '@mode = \'sm\'',
                                'iframe'  => [
                                    'src'    => '//embed.nicovideo.jp/watch/sm{@idhao}'
                                ]
                            ],
                        ],
                        'otherwise' => [
                            'iframe'  => [
                                'src'    => '//acg.tv/{@idhao}'
                            ]
                        ]
                    ]
                ]
            );
             $config->BBCodes->addCustom(
               '[oneindex src={URL?}][/oneindex]',
               '<video preload="" controls="" width="100%"><source src="{URL}" type="video/mp4"></video>'
            );
        }), 
        
        
        // fancybox
        
        (new Extend\Frontend('forum'))
        ->js(__DIR__.'/fancybox/js/dist/forum.js')
        ->css(__DIR__.'/fancybox/less/forum.less'),
        (new Extend\Locales(__DIR__ . '/fancybox/locale') ),
        
    
    ];


