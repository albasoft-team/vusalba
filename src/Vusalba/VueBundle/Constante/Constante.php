<?php

namespace Vusalba\VueBundle\Constante;


class Constante
{
    const DBNAME = 'vusalba';
    const USER = 'root';
    const PASSWORD = '';
    const HOST = 'localhost';
    const MAPPING_IMPORT = array(
        'command' => 'doctrine:mapping:import',
        'bundle' => 'VueBundle',
        'mapping-type' => 'annotation',
        '--filter' => 'Inputtable',
        '--force' => true,
        '--no-interaction'
    );
    const MAPPING_CONVERT = array(
        'command' => 'doctrine:mapping:convert',
        'to-type' => 'annotation',
        'dest-path' => 'C:\wamp64\www\vusalba\src\Vusalba\VueBundle\Entity',
        '--filter' => 'Inputtable',
        '--no-interaction'
    );
    const GENERATE_ENTITIES = array(
        'command' => 'doctrine:generate:entities',
        'name' => 'VueBundle:Inputtable',
        '--no-interaction'
    );
    const GENERATE_CRUD = array(
        'command' => 'doctrine:generate:crud',
        '--entity' => 'VueBundle:Inputtable',
        '--no-interaction',
        '--format' => 'annotation',
        '--with-write' => 'yes'
    );
    /**
     * @param $fields
     * @return string
     */
   public static function getCreateQuery($fields) {
       $query = "CREATE TABLE IF NOT EXISTS InputTable( `id` INTEGER NOT NULL AUTO_INCREMENT,
                                  `composant_id` INTEGER NULL ,
                                   $fields,
                                   PRIMARY KEY (`id`),
                                   CONSTRAINT `comp_inputtable_id` FOREIGN KEY (`composant_id`) REFERENCES `composant` (`id`) ON DELETE CASCADE
                                    )ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci";
       return $query;
   }
}