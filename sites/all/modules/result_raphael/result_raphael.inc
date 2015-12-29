<?php

/**
 * @file
 * gRaphaël example graphs.
 */

/**
 * Page callback for showing our examples.
 */
function result_raphael_graphs_page() {
  $output = array();

  $popdata = result_raphael_espece_population_data();
  $milieudata = result_raphael_milieu_population_data();
  $espmildata = result_raphael_espece_par_milieu_data();
  $milespfreqdata = result_raphael_milieu_par_especes_frequentes_data();

  $output[] = "<div id='result_raphael' class='row-fluid '>";
  $output[] = "<div class='row-fluid titre-chart'><h3 class='span12 '>Apports et Résultats pour la ville de Marseille</h3><p>Analyse du <a href='http://lped.org/' target='_blank' title='Visiter le site du LPED'>Laboratoire Population Environnement Développement.</a></p></div><ul class='row-fluid'><li class='span3'><span class='badge badge-success'>60</span> Observateurs</li> <li class='span3'><span class='badge badge-success'>40</span> Rues</li> <li class='span3'><span class='badge badge-success'>35</span> Familles</li> <li class='span3'><span class='badge badge-success'>109</span> Espèces</li></ul>";
  
  $output[] = "<div id='esp-frequentes' class='row-fluid graph-container'>";
  $output[] = "<div class='span8'>";
  $output[] = '<h4>' . t('Espèces les plus fréquentes') . '</h4>';
  $output[] = theme('graphael', array(
    'method' => 'bar',
    'values' => $popdata[2013],
    'params' => array(
      'colors' => array('#D23830', '#28717E','#008D00', '#A0CA10', '#DEDB00', '#68B3AF','#68B22F','#68B388','#68B3FF'),
      'font' => '10px Arial, sans-serif',
      
      'opts' => array(
        'gutter' => '80%',
      ),
      'label' => array(
        'values' => array('Parietaria...', 'Sonchus sp', 'Conyza sp', 'Sisymbrium...', 'Poa annua', 'Taraxacum...','Oloptum...','Polycarpon...','Stellaria...'),
        'isBottom' => TRUE,
        'params' => array('attrText' => array(
          'fill' =>  '#aaa',
          'font' => '10px Arial, sans-serif',
          'width'=> '80px'
        )),
      ),
    ),
    'extend' => array(
      'label' => array(
        'values' => array('Parietaria judaica = 75%', 'Sonchus sp = 72,5%', 'Conyza sp = 57,5%', 'Sisymbrium irio = 35%', 'Poa annua = 32,5%', 'Taraxacum officinale = 27,5%','Oloptum miliaceum = 22,5%','Polycarpon tetraphyllum = 20%','Stellaria media = 20%'),
        'params' => array('attrText' => array(
          'fill' =>  '#333',
          'font' => '10px Arial, sans-serif',
        )),
      ),
    )
  ));
  $output[] = "</div>";
  $output[] = "<p class='span4 result-resume'><strong>La pariétaire est observée dans 75% des rues échantillonnées.</strong></p>";
  $output[] = "</div>";


  $output[] = "<div id='esp-par-milieu' class='row-fluid graph-container'>";
  $output[] = "<div class='row-fluid'>";
  $output[] = '<h4 class="text-align-right">Pourcentage d’espèces par milieu</h4>';
  $output[] = "</div>";

  $output[] = "<div class='row-fluid'>";
  $output[] = "<p class='span5 result-resume'><strong>Près de 80% des plantes sont observées dans des fissures.</strong></p>";

  $output[] = "<div class='span7'>";
  $output[] = theme('graphael', array(
    'method' => 'pie',
    'values' => $milieudata[2013],
    'params' => array(
      'colors' => array('#D23830', '#28717E','#008D00', '#A0CA10', '#DEDB00', '#68B3AF'),
      'opts' => array(
        'gutter' => '80%',
        'legend' => array(
          '%%.% – Pelouse',
          '%%.% – Chemin',
          '%%.% – Plate Bande',
          '%%.% – Mur',
          '%%.% – Pied d\'arbre',
          '%%.% – Fissure',
          array('attrText' => array(
                    'fill' =>  '#aaa',
                    'font' => '14px Arial, sans-serif',
                  )),
        ),
      ),
    ),
    'extend' => array(
      'label' => array(
        'values' => array('Pelouse', 'Chemin', 'Plate Bande', 'Mur', "Pied d'arbre", 'Fissure'),
        'params' => array('attrText' => array(
          'fill' =>  '#333',
          'font' => '12px Arial, sans-serif',
        )),
      ),
    ),
  ));
  $output[] = "</div>";
  $output[] = "</div>";
  $output[] = "</div>";


  $output[] = "<div id='nb-milieu' class='row-fluid graph-container'>";
  $output[] = "<div class='row-fluid'>";
  $output[] = '<h4 class="span12">Nombre de milieux colonisés par espèce</h4>';
  $output[] = "</div>";
  $output[] = "<div class='row-fluid'>";
  $output[] = "<div class='span8'>";
  $output[] = theme('graphael', array(
    'method' => 'pie',
    'values' => $espmildata[2013],
    'params' => array(
      'colors' => array('#D23830', '#28717E','#008D00', '#A0CA10', '#DEDB00'),
      'opts' => array(
        'gutter' => '80%',
        'legend' => array(
          '%%.% – 1 milieu',
          '%%.% – 2 milieux',
          '%%.% – 3 milieux',
          '%%.% – 4 milieux',
          '%%.% – 5 milieux',
          array('attrText' => array(
                    'fill' =>  '#aaa',
                    'font' => '14px Arial, sans-serif',
                  )),
        ),
        //'legendpos' => 'west',
      ),
    ),
    'extend' => array(
      'label' => array(
        'values' => array('1 milieu', '2 milieux', '3 milieux', '4 milieux', "5 milieux"),
        'params' => array('attrText' => array(
          'fill' =>  '#333',
          'font' => '12px Arial, sans-serif',
        )),
      ),
    ),
  ));
  $output[] = "</div>";
  $output[] = "<p class='span4 result-resume'><strong>La majorité des espèces sont rencontrées dans un seul milieu. Moins de 2% colonisent 5 milieux.</strong></p>";
  $output[] = '</div>';
  $output[] = '</div>';


  $output[] = "<div id='milieu-par-especes' class='row-fluid graph-container'>";
  $output[] = " <div class='row-fluid'>";
  $output[] = "   <h4 class='span12 text-align-right'>Nombre de milieux colonisés par les espèces les plus fréquentes</h4>";
  $output[] = " </div>";
  $output[] = " <div class='row-fluid'>";
  $output[] = "<p class='span4 result-resume'><strong>Ces espèces colonisent entre 2 et 5 milieux.</strong></p>";

  $output[] = "<div class='span8'>";

  $output[] = theme('graphael', array(
    'method' => 'bar',
    'values' => $milespfreqdata[2013],
    'params' => array(
      'colors' => array('#D23830', '#28717E','#008D00', '#A0CA10', '#DEDB00', '#68B3AF','#68B22F','#68B388','#68B3FF'),
      'font' => '10px Arial, sans-serif',
      'opts' => array(
        'gutter' => '80%',
      ),
      'label' => array(
        'values' => array('Parietaria...', 'Sonchus sp', 'Conyza sp', 'Sisymbrium...', 'Poa annua', 'Taraxacum...','Oloptum...','Polycarpon...','Stellaria...'),
        'isBottom' => TRUE,
      ),
    ),
    'extend' => array(
      'label' => array(
        'values' => array('Parietaria judaica = 4 milieux', 'Sonchus sp = 4 milieux', 'Conyza sp = 4 milieux', 'Sisymbrium irio = 5 milieux', 'Poa annua = 4 milieux', 'Taraxacum officinale = 4 milieux','Oloptum miliaceum = 3 milieux','Polycarpon tetraphyllum = 2 milieux','Stellaria media = 2 milieux'),
        'params' => array('attrText' => array(
          'fill' =>  '#333',
          'font' => '10px Arial, sans-serif',
        )),
      ),
    ),
  ));
  $output[] = '</div>';
  $output[] = '</div>';



  $output[] = '</div>';

  return join($output);
}

/**
 * Espece population data.
 */
function result_raphael_espece_population_data() {
  return array(
    // Parietaria judaica', 'Sonchus sp', 'Conyza sp', 'Sisymbrium irio', 'Poa annua', 'Taraxacum officinale','Oloptum miliaceum','Polycarpon tetraphyllum','Stellaria media'
    //'1750' => array(106, 502, 163, 16, 2, 2),
    //'1800' => array(107, 635, 203, 24, 7, 2),
    //'1850' => array(111, 809, 276, 38, 26, 2),
    //'1900' => array(133, 947, 408, 74, 82, 6),
    //'1950' => array(211, 1398, 547, 167, 172, 12.8),
    '2013' => array(750, 725, 575, 350, 325, 275,225,200,200),
  );
}

function result_raphael_milieu_par_especes_frequentes_data() {
  return array(
    // Parietaria judaica', 'Sonchus sp', 'Conyza sp', 'Sisymbrium irio', 'Poa annua', 'Taraxacum officinale','Oloptum miliaceum','Polycarpon tetraphyllum','Stellaria media'
    '2013' => array(4, 4, 4, 5, 4, 4,3,2,2),
  );
}

/**
 * Millieu population data.
 */
function result_raphael_milieu_population_data() {
  return array(
    // 'Pelouse', 'chemin', 'Plate Bande', 'Mur', "Pied d'arbre", 'Fissure'
    '2013' => array(095, 286, 2190, 3810, 3905, 7810),
  );
}

/**
 * Nombre de milieux par espece data.
 */
function result_raphael_espece_par_milieu_data() {
  return array(
    // '1 milieu', '2 milieux'
    '2013' => array(5429, 2476, 857, 1048, 190),
  );
}


