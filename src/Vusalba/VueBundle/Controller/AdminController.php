<?php
/**
 * Created by PhpStorm.
 * User: Aly Seck
 * Date: 26/07/2017
 * Time: 14:46
 */

namespace Vusalba\VueBundle\Controller;


use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;


/**
 * Class AdminController
 * @package Vusalba\VueBundle\Controller
 * @Route("admin")
 */
class AdminController extends Controller
{
    /**
     * @Route("/", name="admin_index", options={"expose" =  true})
     * @Method("GET")
     */
    public function indexAction() {
        $em = $this->getDoctrine()->getManager();
        $axes = $em->getRepository('VueBundle:Axis')->findBy(['iscalculated' => false]);
        $scopes = $em->getRepository('VueBundle:Node')->findAll();
        return $this->render('admin/index.html.twig', array(
            "axes" => $axes,
            'scopes' => $scopes
        ));
    }

    /**
     * @return JsonResponse
     * @Route("/comp/list", name="list_composant", options={"expose"=true})
     * @Method("GET")
     */
    public function getComposant() {
        $em = $this->getDoctrine()->getManager();
        $composants = $em->getRepository('VueBundle:Composant')->findAll();
        $view = $this->renderView(':composant:index.html.twig',['composants' => $composants]);

        return new JsonResponse([
            'view' => $view,
            'error' => null
        ]);
    }
    /**
     * @return JsonResponse
     * @Route("/axe/list", name="list_axe", options={"expose"=true})
     * @Method("GET")
     */
    public function getAxes() {
        $em = $this->getDoctrine()->getManager();
        $axes = $em->getRepository('VueBundle:Axis')->findAll();
        $view = $this->renderView(':axis:index.html.twig',['axes' => $axes]);

        return new JsonResponse([
            'view' => $view,
            'error' => null
        ]);
    }
    /**
     * @return JsonResponse
     * @Route("/node/list", name="list_node", options={"expose"=true})
     * @Method("GET")
     */
    public function getNodes() {
        $em = $this->getDoctrine()->getManager();
        $nodes = $em->getRepository('VueBundle:Node')->findAll();
        $view = $this->renderView(':node:index.html.twig',['nodes' => $nodes]);

        return new JsonResponse([
            'view' => $view,
            'error' => null
        ]);
    }
     /**
     * @return JsonResponse
     * @Route("/level/list", name="list_level", options={"expose"=true})
     * @Method("GET")
     */
    public function getLevels() {
        $em = $this->getDoctrine()->getManager();
        $levels = $em->getRepository('VueBundle:Level')->findAll();
        $view = $this->renderView(':level:index.html.twig',['levels' => $levels]);

        return new JsonResponse([
            'view' => $view,
            'error' => null
        ]);
    }

    /**
     * @return JsonResponse
     * @Route("/groupe/list", name="list_group", options={"expose"=true})
     * @Method("GET")
     */
    public function getGroupe() {
        $em = $this->getDoctrine()->getManager();
        $groups = $em->getRepository('VueBundle:Groupe')->findAll();
        $view = $this->renderView(':groupe:index.html.twig',['groupes' => $groups]);

        return new JsonResponse([
            'view' => $view,
            'error' => null
        ]);
    }
     /**
     * @return JsonResponse
     * @Route("/axegroupe/list", name="list_axegroup", options={"expose"=true})
     * @Method("GET")
     */
    public function getAxeGroupe() {
        $em = $this->getDoctrine()->getManager();
        $groups = $em->getRepository('VueBundle:AxeGroupe')->findAll();
        $view = $this->renderView(':axegroupe:index.html.twig',['axeGroupes' => $groups]);

        return new JsonResponse([
            'view' => $view,
            'error' => null
        ]);
    }

}