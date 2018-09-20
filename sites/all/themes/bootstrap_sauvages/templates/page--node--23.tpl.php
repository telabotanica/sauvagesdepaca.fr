<header id="navbar" role="banner" class="navbar navbar-fixed-top">
  <div class="navbar-inner">
    <div class="container">
      <!-- .btn-navbar is used as the toggle for collapsed navbar content -->
      <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </a>

      <?php if (!empty($logo)): ?>
        <a class="logo pull-left" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
          <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
        </a>
      <?php endif; ?>

      <?php if (!empty($site_name)): ?>
        <h1 id="site-name">
          <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" class="brand"><?php print $site_name; ?></a>
        </h1>
      <?php endif; ?>

      <?php if (!empty($primary_nav) || !empty($secondary_nav) || !empty($page['navigation'])): ?>
        <div class="nav-collapse collapse">
          <nav role="navigation">
            <?php if (!empty($primary_nav)): ?>
              <?php print render($primary_nav); ?>
            <?php endif; ?>
            <?php if (!empty($secondary_nav)): ?>
              <?php print render($secondary_nav); ?>
            <?php endif; ?>
            <?php if (!empty($page['navigation'])): ?>
              <?php print render($page['navigation']); ?>
            <?php endif; ?>
          </nav>
        </div>
      <?php endif; ?>
    </div>
  </div>
</header>

<div class="main-container container">

  <header role="banner" id="page-header">
    <?php if (!empty($site_slogan)): ?>
      <p class="lead"><?php print $site_slogan; ?></p>
    <?php endif; ?>

    <?php print render($page['header']); ?>
  </header> <!-- /#header -->

  <div class="row-fluid">

    <?php if (!empty($page['sidebar_first'])): ?>
      <aside class="span3" role="complementary">
        <?php print render($page['sidebar_first']); ?>
      </aside>  <!-- /#sidebar-first -->
    <?php endif; ?>  

    <section class="<?php print _bootstrap_content_span($columns); ?>">  
      <?php if (!empty($page['highlighted'])): ?>
        <div class="highlighted hero-unit"><?php print render($page['highlighted']); ?></div>
      <?php endif; ?>
      <?php if (!empty($breadcrumb)): print $breadcrumb; endif;?>
      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
      <?php if (!empty($title)): ?>
        <h1 class="page-header"><?php print $title; ?></h1>
      <?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php print $messages; ?>
      <?php if (!empty($tabs)): ?>
        <?php print render($tabs); ?>
      <?php endif; ?>
      <?php if (!empty($page['help'])): ?>
        <div class="well"><?php print render($page['help']); ?></div>
      <?php endif; ?>
      <?php if (!empty($action_links)): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php //print render($page['content']); ?>
      <div class="row-fluid">
        <div class="iFrame span9">
          <iframe frameborder="0" scrolling="no" src="https://www.tela-botanica.org/widget:cel:cartoPoint?projet=sauvages&amp;dept=13,84,83,06,04,05&amp;titre=Observations%20en%20PACA" style="width:100%;height:600px;"></iframe>
        </div>
        <div class="well span3 encart jaune">
          <p class="lead">Le nombre d'observations ne cesse d'augmenter en région <strong>PACA</strong>.</br>
          Un grand <strong>MERCI</strong> à tous pour votre contribution&nbsp;!</p>
          <hr>
          <h2>Mode d'emploi&nbsp;:</h2>
          <ul><li>Zoomez sur votre ville pour voir les observations</li><li>Cliquez sur les points pour voir la liste des plantes rencontrées.</li><li>Cliquez sur la colonne gauche pour filtrer par espèce.</li></ul>
          <p class="nota-bene">NB&nbsp;:&nbsp;Si vous souhaitez contacter un observateur à travers cette carte des observations, il faut que vous soyez tous deux inscrits sur le site de Tela Botanica : <a href="https://www.tela-botanica.org/page:inscription" target="_blank" title="S'inscrire : https://www.tela-botanica.org/page:inscription">inscription</a></p>
        </div>
      </div>
      <div class="cheminement row-fluid">
        <div class="span12">
          <div class="fleche-suivant-r">
            <a href="<?php echo $base_path;?>analyses_scientifiques" title="En savoir plus" target="_self">Premières Analyses</a>
          </div>
        </div>
      </div>

    </section>

    <?php if (!empty($page['sidebar_second'])): ?>
      <aside class="span3" role="complementary">
        <?php print render($page['sidebar_second']); ?>
      </aside>  <!-- /#sidebar-second -->
    <?php endif; ?>

  </div>
</div>
<footer class="footer container">
  <?php print render($page['footer']); ?>
</footer>
