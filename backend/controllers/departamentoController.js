// controladores/departamentoController.js
const departamentoService = require('../services/obtener_departamento_rol_usuario/departamentoService');

const getDepartamentoxRolxUsuarios = async (req, res) => {
    const { roleId } = req.query;

    try {
        const departamentos = await departamentoService.getDepartamentoxRolxUsuarios(roleId);

        if (!departamentos || departamentos.length === 0) {
            return res.status(404).json({ message: "No se encontraron departamentos" });
        }

        return res.json(departamentos);
    } catch (error) {
        console.error("Error al obtener departamentos", error);
        return res.status(500).json({ error: "Error al obtener departamentos" });
    }
};

module.exports = { getDepartamentoxRolxUsuarios };
