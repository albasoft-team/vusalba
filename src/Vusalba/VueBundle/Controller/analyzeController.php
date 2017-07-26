<?php
/**
 * Created by PhpStorm.
 * User: Aly Seck
 * Date: 18/07/2017
 * Time: 14:54
 */

namespace Vusalba\VueBundle\Controller;


use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Vusalba\VueBundle\Entity\Node;

/**
 * Class analyzeController
 * @package Vusalba\VueBundle\Controller
 * @Route("analyser")
 *
 */
class analyzeController extends Controller
{

    /**
     * @Route("/", name="analyze_index", options={"expose" = true})
     * @Method("GET")
     */
    public function indexAction() {
        $em = $this->getDoctrine()->getManager();
        $axes = $em->getRepository('VueBundle:Axis')->findBy(['iscalculated' => false]);
        $scopes = $em->getRepository('VueBundle:Node')->findAll();
        return $this->render('analyze/index.html.twig', array(
            "axes" => $axes,
            'scopes' => $scopes
        ));
    }
}